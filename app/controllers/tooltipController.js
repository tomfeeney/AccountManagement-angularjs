
/***********************************  Tooltip Controller ***********************************/

AngularLibraryApp.controller('AngularTooltipController', function($scope) {

  "use strict";
    
  $scope.Tooltip = "Default Tooltip";
  $scope.AnotherTooltip = "Another tooltip";
  $scope.ExtraTooltip = "Another one here too";
  $scope.LastTooltip = "The last tip!";
 
  $scope.dynamicrightTooltip = "Tooltip on right";
  $scope.dynamicleftTooltip = "Tooltip on left";
  $scope.dynamictopTooltip = "Tooltip on top";
  $scope.dynamicbottomTooltip = "Tooltip on bottom";
    
});

/***********************************  End Tooltip Controller ***********************************/
