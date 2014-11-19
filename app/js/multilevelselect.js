
/* MULTILEVEL SELECT */
/* Author - Sara Saini */

$(document).ready(function(){

  $("div.multilevelcontainer .multilevelwrapper").children('li:not(.multilevelselectedwrapper)').toggle();

  $("div.multilevelcontainer").on("click", ".multilevelselectedwrapper", function() {

    $(this).parent().find(".multilevelwrapperscroll").children().toggle();
  });

  $("div.multilevelcontainer li:not(.multilevelselectedwrapper) span").click(function(event){
    $(this).closest(".multilevelwrapperscroll").children().toggle();

    //clear drop down selections
    $(this).closest(".multilevelwrapperscroll").find('li:not(.multilevelselectedwrapper) span').removeClass("selected");

    //add selected class to the current item
    $(this).addClass('selected');

    //update the selection with ONLY the text of the LI
    $(this).closest("div.multilevelcontainer").find(".multilevelselectedwrapper span").html($(this).clone().children().remove().end().text());

    //close dropdown
    $(this).closest(".multilevelwrapperscroll").children().css("display","none");

    //prevent higher level LI from triggering
    event.stopPropagation();
  });

  /*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/ 
  var currentSelection = 0;
  var currentUrl = '';

  // Register keypress events on the whole document
  $("ul.multilevelwrapper").keypress(function(e) {

    switch(e.keyCode) { 

      // User pressed "up" arrow
      case 38:
        navigate('up');
        break;

      // User pressed "down" arrow
      case 40:
        navigate('down');
        break;

      // User pressed "enter"
      case 13:
        if(currentUrl != '') {
          $(this).find("li.multilevelselectedwrapper span").text(currentUrl);
          $(this).find(".multilevelwrapperscroll").children("li:not(.multilevelselectedwrapper)").toggle();
        }
        break;
    }
    return false;
  });  

    // Add data to let the hover know which index they have
    for(var i = 0; i < $(".multilevelavailableoptions").size(); i++) {
      $(".multilevelavailableoptions").eq(i).data("number", i);
    }

    // Simulate the "hover" effect with the mouse
    $(".multilevelavailableoptions").hover(
      function () {
        currentSelection = $(this).data("number");
        setSelected(currentSelection);
      }, function() {
        $(".multilevelavailableoptions").removeClass("itemhover");
        currentUrl = '';
    });
   
  function navigate(direction) {
    // Check if any of the menu items is selected
    if($(".multilevelwrapper li .itemhover").size() == 0) {
      currentSelection = -1;
    }
  
    if(direction == 'up' && currentSelection != -1) {
      if(currentSelection != 0) {
        currentSelection--;
      }
    } else if (direction == 'down') {
      if(currentSelection != $(".multilevelavailableoptions").size() -1) {
        currentSelection++;
      }
    }
    setSelected(currentSelection);
  }

  function setSelected(menuitem) {
    $(".multilevelavailableoptions").removeClass("itemhover");
    $(".multilevelavailableoptions").eq(menuitem).addClass("itemhover");
    currentUrl = $(".multilevelavailableoptions").eq(menuitem).text();
  }

});

/* END MULTILEVEL SELECT */
