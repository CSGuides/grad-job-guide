$( () => {
  var tls = $(".guide-timeline");
  $.each(tls, (_, tl) => {
    $.getJSON($(tl).data("src"), (data) => {
      $.each(data, (_, search) => {
        var items = []
        search.events.forEach(evt => {
          items.push(`<li class=${evt.type}>${evt.date}: ${evt.description}</li>`);
        });
        
        $("<h4/>", {
          html: `${$(tl).data("person")} (${search.cycle})`
        }).appendTo(tl);
        
        $("<ul/>", {
          html: items.join("")
        }).appendTo(tl);
      });
      
    });
  });
});