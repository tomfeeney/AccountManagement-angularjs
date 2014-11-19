
/*********************************** Multi Select JS ***********************************/

AngularLibraryApp.directive('chosen',function(){
    var linker = function(scope,element,attrs) {
        var list = attrs['chosen'];

        scope.$watch(list, function(){
            element.trigger('liszt:updated');
            element.trigger("chosen:updated");
        });

        element.chosen();
    };

    return {
        restrict:'A',
        link: linker
    }
});

/*********************************** End Multi Select JS ***********************************/

