
/* BACKGROUND FORM ONFOCUS */
 /* Author - Sara Saini */

jQuery(document).ready(function($) {

  $(".formlabelplace").focus(function(){
    $(this).parent().addClass("active");

  }).blur(function(){
   $(this).parent().removeClass("active");
  })

});    
 

jQuery(document).ready(function($) {

  $(".multilevelwrapper").focus(function(){
    $(this).find("li.multilevelselectedwrapper").addClass("active");

  }).blur(function(){
   $(this).find("li.multilevelselectedwrapper").removeClass("active");
  })

});    

jQuery(document).ready(function($) {

  $(".imageselectchosencontainer").focus(function(){
    $(this).children().addClass("active");

  }).blur(function(){
   $(this).children().removeClass("active");
  })

});    
  
  
/* END BACKGROUND FORM ONFOCUS */


/* BACKGROUND SELECTED LIST  IN NAVIGATION PANEL */

var classHighlight = 'selectedlist'; 

var $selectedbackground = $('.spacer > ul >li').click(function(e) {
  e.preventDefault();
  $selectedbackground.removeClass(classHighlight);
  $(this).addClass(classHighlight);
});

/* END BACKGROUND SELECTED LIST  IN NAVIGATION PANEL */

