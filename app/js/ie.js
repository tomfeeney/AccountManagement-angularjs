/* Author - Sara Saini */

/* TABLE EVEN ODD COLORING FOR IE */

$(document).ready(function(){
  $('.tableevenodd>tbody>tr:even').addClass('even');
  $('.tableevenodd>tbody>tr:odd').addClass('odd');
});

/* END TABLE EVEN ODD COLORING FOR IE */


/* IE 10 PADDING */

if ($.browser.msie && $.browser.version == 10) {
  $(".formlabelplace").css("padding-left","8px");
}

/* END IE 10 PADDING */


/* IE 10 BUTTON MARGIN */

if ($.browser.msie) {
  $(".buttonmargin").css("margin","15px");
}

/* END IE 10 BUTTON MARGIN */


/* IE DISABLING BUTTONS */

if ($.browser.msie) {
  $(".primarybutton.disabled").attr("disabled","disabled");
  $(".secondarybutton.disabled").attr("disabled","disabled");
}

/* END IE DISABLING BUTTONS */



