
/***********************************  IE JS ***********************************/

/* Author - Sara Saini */

/**** Table Even & Odd Coloring for IE  ****/

$(document).ready(function(){
  $('.tableevenodd>tbody>tr:even').addClass('even');
  $('.tableevenodd>tbody>tr:odd').addClass('odd');
});

/**** End Table Even & Odd Coloring for IE  ****/


/**** IE10 Padding ****/

if ($.browser.msie && $.browser.version == 10) {
  $(".formlabelplace").css("padding-left","8px");
}

/**** End IE10 Padding ****/


/**** IE10 Button Margin ****/

if ($.browser.msie) {
  $(".buttonmargin").css("margin","15px");
}

/**** End IE10 Button Margin ****/


/**** IE Disabling Buttons ****/

if ($.browser.msie) {
  $(".primarybutton.disabled").attr("disabled","disabled");
  $(".secondarybutton.disabled").attr("disabled","disabled");
}

/**** End IE Disabling Buttons ****/

/***********************************  End IE JS ***********************************/


