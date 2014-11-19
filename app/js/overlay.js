
/* OVERLAY CONTENT SCROLL ONLY */
/* Author- Sara Saini */

$(window).bind("resize",function() {
  var maxHeight = $(window).height() - 255;
  $('.overlaycontentoverflowscroll').css('max-height', maxHeight + 'px');
});


$(window).bind("load",function() {
  var maxHeight = $(window).height() - 255;
  $('.overlaycontentoverflowscroll').css('max-height', maxHeight + 'px');
});

/* END OVERLAY CONTENT SCROLL ONLY */


/* WINDOW CENTERED OVERLAY */

$(window).bind("resize",function() {
  var Height = $(window).height()/2 - 160;
  $('.maxcontentheight').css('max-height', Height + 'px');

});

$(window).bind("load",function() {
  var Height = $(window).height()/2 -160;
  $('.maxcontentheight').css('max-height', Height + 'px');
});

/* END WINDOW CENTERED OVERLAY */
