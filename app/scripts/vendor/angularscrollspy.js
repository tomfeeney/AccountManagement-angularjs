
/*--******************************************** Scrollspy JS ********************************************--*/

var angularscrollspy = angular.module('angularscrollspy', []);

angularscrollspy.directive('scrollSpy', function($timeout){
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            var offset = parseInt(attr.scrollOffset, 10)
            if(!offset) offset = 10;
            console.log("offset:  " + offset);
            elem.scrollspy({ "offset" : offset});
            scope.$watch(attr.scrollSpy, function(value) {
                $timeout(function() { 
                  elem.scrollspy('refresh', { "offset" : offset})
                }, 1);
            }, true);
        }
    }
});

angularscrollspy.directive('preventDefault', function() {
    return function(scope, element, attrs) {
        jQuery(element).click(function(event) {
            event.preventDefault();
        });
    }
});

angularscrollspy.directive("scrollTo", ["$window", function($window){
    return {
        restrict : "AC",
        compile : function(){

            function scrollInto(elementId) {
                if(!elementId) $window.scrollTo(0, 0);
                //check if an element can be found with id attribute
                var el = document.getElementById(elementId);
                if(el) el.scrollIntoView();
            }

            return function(scope, element, attr) {
                element.bind("click", function(event){
                    scrollInto(attr.scrollTo);
                });
            };
        }
    };
}]);

/*--******************************************** End Scrollspy JS ********************************************--*/
