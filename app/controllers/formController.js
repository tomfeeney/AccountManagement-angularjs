
/***********************************  Form Controller ***********************************/

AngularLibraryApp.controller('AngularRegistrationController', function($scope) {
    
    "use strict";
    
    $scope.title = "Basic Registration Form";
    $scope.portalRegistration = "Portal Registration";


    $scope.initialize = function() {
        console.log("Intializing form controller...");
    };
    
});

/***********************************  End Form Controller ***********************************/

