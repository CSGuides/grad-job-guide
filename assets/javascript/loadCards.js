$(document).foundation();

const colors = ["#13154e", "#4f1f5d", "#a9288c", "#a769cc", "#7587db", "#7c133d", "#3333cc", "#69b64f", "	#69b64f", "#f25c5c", "#f6ab53"];
let colorAssignment = {};

function getColorForTag(tag) {
  const lowerCaseTag = tag.toLowerCase();
  if (colorAssignment[lowerCaseTag]) {
    return colorAssignment[lowerCaseTag];
  }

  if (Object.keys(colorAssignment).length >= colors.length) {
    let hash = 0;
    for (let i = 0; i < lowerCaseTag.length; i++) {
      hash = lowerCaseTag.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % colors.length);
    colorAssignment[lowerCaseTag] = colors[index];
  } else {
    for (let color of colors) {
      if (!Object.values(colorAssignment).includes(color)) {
        colorAssignment[lowerCaseTag] = color;
        break;
      }
    }
  }

  return colorAssignment[lowerCaseTag];
}

function extractStartYear(cycle) {
  const match = cycle.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : 0;
}

$.getJSON("../assets/materials/contributors.json", function(data) {
  data.sort(function(a, b) {
    const aYear = extractStartYear(a.cycle || '');
    const bYear = extractStartYear(b.cycle || '');
    return bYear - aYear; // Sort in descending order
  });

  var allTags = new Set();

  data.forEach(function(item) {
    if (item.tags) {
      item.tags.forEach(tag => allTags.add(tag.toLowerCase()));
    }

    var tagHtml = item.tags ? item.tags.map(tag => `<span class="tag" style="background-color: ${getColorForTag(tag)};">${tag}</span>`).join(' ') : '';

    var cardHtml = `
    <div class="cell person-card" data-age="${item.age}" data-name="${item.name.toLowerCase()}" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}">
      <div class="card">
        ${item.profileImageLoc ? `<img src="/grad-job-guide/assets/materials/${item.profileImageLoc}" alt="Profile Image" class="thumbnail">` : ''}
        <div class="card-section">
          <h4>${item.name}</h4>
          <p>${item.cycle} cycle</p>
          ${tagHtml}
        </div>
        <div class="more-button-container">
        <button class="button" data-open="exampleModal1" data-id="${item.id}">More Information</button>

        </div>
      </div>
    </div>
  `; 

    $("#peopleContent").append(cardHtml);
  });

  allTags.forEach(tag => {
    const tagColor = getColorForTag(tag);
    $("#tagContainer").append(`<button class="tag-filter button small" data-tag="${tag}" style="background-color: #a2a2a2; border: 2px solid; border-radius: 12px; border-color: #a2a2a2;" data-original-color="${tagColor}">${tag}</button>`);
  });

  $(document).on("click", ".button[data-open='exampleModal1']", function() {
    var id = $(this).data("id");
    var item = data.find(i => i.id == id);

    $("#modalTitle").text(item.name);
    $("#modalAge").text(`${item.age} years old`);

    if (item.profileImageLoc) {
      $("#modalImage").attr("src", item.profileImageLoc).show();
    } else {
      $("#modalImage").hide();
    }

    if (item.portfolio) {
      $("#portfolio").text(item.portfolio).show();
    } else {
      $("#portfolio").hide();
    }

    $("#modalContactLink").attr("href", `mailto:${item.contactEmail}?subject=Inquiry about ${item.name}`);

    $('#exampleModal1').foundation('open');
  });

  $(document).foundation();

  $("#search").on("input", function() {
    var query = $(this).val().toLowerCase();
    $(".person-card").each(function() {
      var name = $(this).data("name");
      var age = $(this).data("age");
      var tags = $(this).data("tags");

      if (name.includes(query) || age.toString().includes(query) || (tags && tags.includes(query))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $(document).on("click", ".tag-filter", function() {
    console.log("Tag filter clicked");
    const originalColor = $(this).data("original-color");
    if ($(this).hasClass("selected")) {
      console.log("Removing selected class");
      $(this).removeClass("selected").css({
        "background-color": "#a2a2a2",
        "border": "2px solid",  
        "border-color": "#a2a2a2"
      });
    } else {
      console.log("Adding selected class");
      $(this).addClass("selected").css({
        "background-color": originalColor,
        "border": "2px solid",  
        "border-color": "black"
      });
    }

    var selectedTags = $(".tag-filter.selected").map(function() {
      return $(this).data("tag");
    }).get();

    $(".person-card").each(function() {
      var tags = $(this).data("tags").split(',');

      if (selectedTags.every(tag => tags.includes(tag))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
