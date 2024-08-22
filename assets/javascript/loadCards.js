$(document).foundation();

const colors = ["#13154e", 
                "#4f1f5d", 
                "#a9288c", 
                "#a769cc", 
                "#7587db", 
                "#7c133d", 
                "#3333cc", 
                "#69b64f", 
                "#69b64f", 
                "#f25c5c", 
                "#f6ab53",
                "#008000",
                "#B22222"];
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

function createTimeline(events) {
  var items = events.map(function(event, index) {
    return {
      id: index + 1,
      content: event.description,
      start: `2020-${event.date}`,
      className: event.type
    };
  });

  var options = {
    width: '100%',
    height: '300px',
    margin: {
      item: 10
    }
  };

  //var timeline = new vis.Timeline(document.getElementById('timeline'), new vis.DataSet(items), options);
}

function generateContentSections(types, data) {
  // Sort the data by year
  data.sort(function(a, b) {
    const aYear = extractStartYear(a.cycle || '');
    const bYear = extractStartYear(b.cycle || '');
    return bYear - aYear;
  });

  var allTags = new Set();

  // Loop through the data and generate the necessary HTML
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
            <button class="button" data-open="exampleModal1" data-id="${item.id}" data-timeline="${item.timeline}">See Application Materials</button>
          </div>
        </div>
      </div>
    `;

    $("#peopleContent").append(cardHtml);

    // Populate sections dynamically based on contributionTypes.json
    Object.keys(types).forEach(key => {
      if (item[key]) {
        var sectionHtml = `<div class="cell link-cell" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}" data-name="${item.name.toLowerCase()}"><a href="/grad-job-guide/assets/materials/${item[key]}" target="_blank">${item.name}'s ${types[key][1]}</a></div>`;
        $(`#${key}Content`).append(sectionHtml);
      }
    });
  });

  allTags.forEach(tag => {
    const tagColor = getColorForTag(tag);
    $("#tagContainer").append(`<button class="tag-filter button small" data-tag="${tag}" style="background-color: #a2a2a2; border: 2px solid; border-radius: 12px; border-color: #a2a2a2;" data-original-color="${tagColor}">${tag}</button>`);
  });
}

$.getJSON("../assets/materials/contributors.json", function(data) {
  $.getJSON("../assets/materials/contributionTypes.json", function(types) {
    // Create the HTML structure for each type

    const siteUrl = $('.grid-container').data('site-url');
    const baseUrl = $('.grid-container').data('base-url');

    Object.keys(types).forEach(key => {
      const [order, label, detailsLinkLoc] = types[key];
      const sectionHtml = `
        <h3 id="example-${key}">Example ${label}s
        <a class="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="" href="#example-${key}" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a>
        </h3>
        ${detailsLinkLoc ? `<p>(Click <a href="${siteUrl}${baseUrl}/${detailsLinkLoc}">here</a> for more information about preparing your ${label})</p>` : ''}
        <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3" id="${key}Content">
          <!-- Dynamic Content -->
        </div>
      `;

      $("#linkCellContent").append(sectionHtml);
    });

    generateContentSections(types, data);
  });

  // Handle tag filter logic
  function updateFiltering() {
    const selectedTags = $(".tag-filter.selected").map(function() {
      return $(this).data("tag");
    }).get();
    
    const filterMode = $("#filterModeToggle").is(":checked") ? "OR" : "AND";
    $("#toggleLabel").text(filterMode);

    $(".person-card, .link-cell").each(function() {
      const tags = $(this).data("tags") ? $(this).data("tags").split(',') : [];
      const matches = selectedTags.filter(tag => tags.includes(tag));

      if (filterMode === "AND") {
        if (matches.length === selectedTags.length) {
          $(this).show();
        } else {
          $(this).hide();
        }
      } else {
        if (matches.length > 0) {
          $(this).show();
        } else {
          $(this).hide();
        }
      }
    });
  }

  $(document).on("click", ".button[data-open='exampleModal1']", function(event) {
    var id = $(this).data("id");
    var timelinePath = "/grad-job-guide/assets/materials/" + $(this).data("timeline");
    var item = data.find(i => i.id == id);

    $("#modalTitle").text(item.name);
    $("#modalCycle").text(`${item.cycle} cycle`);

    if (item.profileImageLoc) {
      $("#modalImage").attr("src", "/grad-job-guide/assets/materials/" + item.profileImageLoc).show();
    } else {
      $("#modalImage").hide();
    }

    var modalContent = '';

    // Dynamically add the content based on the contributionTypes.json
    $.getJSON("../assets/materials/contributionTypes.json", function(types) {
      Object.keys(types).forEach(key => {
        if (item[key]) {
          modalContent += `<div class="cell link-cell"><a href="/grad-job-guide/assets/materials/${item[key]}" target="_blank">${types[key][1]}</a></div>`;
        }
      });
      $("#modalContent").html(modalContent);
    });

    // Open the modal
    $('#exampleModal1').foundation('open');
  });

  $(document).on('open.zf.reveal', '[data-reveal]', function(event) {
    console.log('Reveal modal opened');
    var modal = $(this);
    console.log('Modal top position:', modal.css('top'));
  });

  $("#search").on("input", function() {
    var query = $(this).val().toLowerCase();
    $(".person-card, .link-cell").each(function() {
      var name = $(this).data("name");
      var tags = $(this).data("tags");

      if (name.includes(query) || (tags && tags.includes(query))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $(document).on("click", ".tag-filter", function(event) {
    const originalColor = $(this).data("original-color");
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected").css({
        "background-color": "#a2a2a2",
        "border": "2px solid",
        "border-color": "#a2a2a2"
      });
    } else {
      $(this).addClass("selected").css({
        "background-color": originalColor,
        "border": "2px solid",
        "border-color": "black"
      });
    }

    updateFiltering();
    $(document).foundation();
  });

  $("#filterModeToggle").on('change', updateFiltering);
}).fail(function(jqxhr, textStatus, error) {
  console.error("Error loading contributors.json:", textStatus, error);
});

$(document).foundation();
