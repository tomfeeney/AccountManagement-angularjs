
/***********************************  Generic Controller ***********************************/

AngularLibraryApp.controller('HPAngularPatternController', function($scope) {
    
   "use strict";
    
    $scope.title = "HP Pattern Library";
    console.log("Initializing controller...");
    
    $scope.initializeUI = function() {
        console.log(">>> Initializing UI...");
        prettyPrint();
    };
    
});

/***********************************  End Generic Controller ***********************************/


