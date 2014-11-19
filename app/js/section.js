
/* SLIDEBAR  FOR SIDEBAR MENU*/
/* Author - Sara Saini */

$(".slidenav").toggle(

    function(){
        $(this).parent().parent().parent().children().animate({
            right:"220px",
            width:"toggle"
        },400
    );
    $(this).addClass("displayinlineblock");
    $(this).parent().parent().parent().parent().parent().addClass("overflowscroll");
    $(this).html('Close');
    },
    
    function() {

        $(this).parent().parent().parent().children().animate({
            right:"0px",
            width:"toggle"
        },200
    );
    $(this).addClass("displaynone");
    $(this).parent().parent().parent().parent().parent().addClass("removescroll");
    $(this).html('Menu');
    }
);   

/* END SLIDEBAR  FOR SIDEBAR MENU */

