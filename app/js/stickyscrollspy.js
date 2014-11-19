
/* Author - Sara Saini */

onResize = function() { 
   var stickynavheight = $(".navbarstickywrapper").height();
   if (stickynavheight > 40){
    topheight = 120 + (stickynavheight - 40);
    $(".fixedscrollpadding").css("top", topheight);
   }
  else{
    $(".fixedscrollpadding").css("top","120px");
  } 
}

$(document).ready(onResize);

$(window).bind('resize', onResize);

