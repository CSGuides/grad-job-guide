$(document).ready(function() {
  console.log("Document is ready!");

  var tls = $(".guide-timeline");

  tls.each(function(_, tl) {
    console.log("Processing timeline for " + $(tl).data("person"));

    var header = $(tl).find('.timeline-header');
    console.log("Header found: ", header.length); // This should be greater than 0

    // Attach click event
    header.css('cursor', 'pointer'); // Ensure the header shows as clickable
    header.on('click', function() {
      console.log("Clicked on " + $(tl).data("person"));
      
      var content = $(tl).find('.timeline-content');
      var toggleText = $(tl).find('.toggle-timeline');
      
      // Check the current visibility state before toggling
      if (content.is(":visible")) {
        toggleText.text('(click to expand)');
      } else {
        toggleText.text('(click to collapse)');
      }
      
      content.slideToggle(300); // Slide animation for better UX
      
      // Check if the content is already loaded using a custom flag
      if (!$(tl).data('loaded')) {
        console.log("Loading JSON for " + $(tl).data("person"));
        $.getJSON($(tl).data("src"))
          .done(function(data) {
            console.log("Data loaded successfully for " + $(tl).data("person"), data);
            $.each(data, function(_, search) {
              var items = [];
              search.events.forEach(function(evt) {
                items.push(`<li class=${evt.type}>${evt.date}: ${evt.description}</li>`);
              });

              $("<ul/>", {
                html: items.join("")
              }).appendTo(content);
            });

            // Set the loaded flag to true after content is added
            $(tl).data('loaded', true);

          })
          .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Request Failed: " + err);
          });
      } else {
        console.log("Content is already loaded.");
      }
    });
  });
});
