
WebPortal.getAppInstance().directive("headersection", function() {
   
   var isOpen = false;
   
   function toggleLoginPanel(event) {
       isOpen = !isOpen;
       console.log(">> Toggling panel...isOpen? %s", isOpen);
   }
   
   /** Return the directive definition object */
   return {
     
        restrict : "E",
        scope : {
            title : "@title"
        },
        templateUrl : "directives/header/header.html",
        link : function ($scope, element, attributes) {
            console.log("Header directive rendered");
            console.log(element);
            
            var anchor = $(element).find("a.toggle_icon");
            console.log("Anchor: %s", anchor[0]);
            anchor.click(toggleLoginPanel);
        }
        
   };
    
});