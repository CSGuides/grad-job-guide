$(document).foundation();

var SCROLLTopy = 0; // Initialize globally

// Function to set SCROLLTopy when the button is clicked
function setScrollTop() {
  SCROLLTopy = $(window).scrollTop(); // Capture the current scroll position
  console.log('Scrolltopy set to:', SCROLLTopy);
}

const colors = ["#13154e", "#4f1f5d", "#a9288c", "#a769cc", "#7587db", "#7c133d", "#3333cc", "#69b64f", "#69b64f", "#f25c5c", "#f6ab53"];
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

$.getJSON("../assets/materials/contributors.json", function(data) {
  data.sort(function(a, b) {
    const aYear = extractStartYear(a.cycle || '');
    const bYear = extractStartYear(b.cycle || '');
    return bYear - aYear;
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
            <button class="button" data-open="exampleModal1" data-id="${item.id}" data-timeline="${item.timeline}">See Application Materials</button>
          </div>
        </div>
      </div>
    `;

    $("#peopleContent").append(cardHtml);

    // Populate additional sections if the links exist
    if (item.cv) {
      var cvHtml = `<div class="cell link-cell" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}"><a href="/grad-job-guide/assets/materials/${item.cv}" target="_blank">${item.name}'s CV</a></div>`;
      $("#resumesCvs").append(cvHtml);
    }
    if (item.coverLetter) {
      var cvHtml = `<div class="cell link-cell" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}"><a href="/grad-job-guide/assets/materials/${item.coverLetter}" target="_blank">${item.name}'s Cover Letter</a></div>`;
      $("#coverLetters").append(cvHtml);
    }
    if (item.researchStatement) {
      var researchHtml = `<div class="cell link-cell" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}"><a href="/grad-job-guide/assets/materials/${item.researchStatement}" target="_blank">${item.name}'s Research Statement</a></div>`;
      $("#researchStatements").append(researchHtml);
    }
    if (item.teachingStatement) {
      var teachingHtml = `<div class="cell link-cell" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}"><a href="/grad-job-guide/assets/materials/${item.teachingStatement}" target="_blank">${item.name}'s Teaching Statement</a></div>`;
      $("#teachingStatements").append(teachingHtml);
    }
    if (item.diversityStatement) {
      var diversityHtml = `<div class="cell link-cell" data-tags="${item.tags ? item.tags.join(',').toLowerCase() : ''}"><a href="/grad-job-guide/assets/materials/${item.diversityStatement}" target="_blank">${item.name}'s Diversity Statement</a></div>`;
      $("#diversityStatements").append(diversityHtml);
    }
  });

  allTags.forEach(tag => {
    const tagColor = getColorForTag(tag);
    $("#tagContainer").append(`<button class="tag-filter button small" data-tag="${tag}" style="background-color: #a2a2a2; border: 2px solid; border-radius: 12px; border-color: #a2a2a2;" data-original-color="${tagColor}">${tag}</button>`);
  });

  $(document).on("click", ".button[data-open='exampleModal1']", function(event) {
    //setScrollTop(); // Set SCROLLTopy when button is clicked

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

    if (item.cv) {
      modalContent += `<div class="cell link-cell"><a href="/grad-job-guide/assets/materials/${item.cv}" target="_blank">CV</a></div>`;
    }
    if (item.coverLetter) {
      modalContent += `<div class="cell link-cell"><a href="/grad-job-guide/assets/materials/${item.coverLetter}" target="_blank">Cover Letter</a></div>`;
    }
    if (item.researchStatement) {
      modalContent += `<div class="cell link-cell"><a href="/grad-job-guide/assets/materials/${item.researchStatement}" target="_blank">Research Statement</a></div>`;
    }
    if (item.teachingStatement) {
      modalContent += `<div class="cell link-cell"><a href="/grad-job-guide/assets/materials/${item.teachingStatement}" target="_blank">Teaching Statement</a></div>`;
    }
    if (item.diversityStatement) {
      modalContent += `<div class="cell link-cell"><a href="/grad-job-guide/assets/materials/${item.diversityStatement}" target="_blank">Diversity Statement</a></div>`;
    }

    $("#modalContent").html(modalContent);

    // Create the timeline if the path is provided
    //if (timelinePath) {
    //  $.getJSON(timelinePath, function(timelineData) {
    //    createTimeline(timelineData);
    //  });
    //} else {
    //  $('#timeline').html(''); // Clear the timeline if no data is available
    //}

    // Open the modal
    $('#exampleModal1').foundation('open');

    console.log("IN CLICK HANDLER");
    var modal = $(this);
    console.log('Modal top position, end clicky:', modal.css('top'));
    console.log('Scrolltopy in clicker', SCROLLTopy);
  });

  $(document).on('open.zf.reveal', '[data-reveal]', function(event) {
    console.log('Reveal modal opened');
    var modal = $(this);
    console.log('Modal top position:', modal.css('top'));
    console.log('scroltoppy position:', SCROLLTopy);
    //$('#exampleModal1').foundation('_disableScroll', SCROLLTopy);



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

    var selectedTags = $(".tag-filter.selected").map(function() {
      return $(this).data("tag");
    }).get();

    $(".person-card, .link-cell").each(function() {
      var tags = $(this).data("tags") ? $(this).data("tags").split(',') : [];

      if (selectedTags.every(tag => tags.includes(tag))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    $(document).foundation();
  });
});

$(document).foundation();