
/***********************************  Code JS ***********************************/

/* Author- Sara Saini */
 
 $(".example-code").each(function() {
    var cloneId = $(this).attr('data-attr');
    var htmlData = $(cloneId).html();
    $(this).text(htmlData);
  });

/***********************************  End Code JS ***********************************/