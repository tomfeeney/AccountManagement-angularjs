
/***********************************  Sidebar Items Controller ***********************************/

AngularLibraryApp.controller('AngularSidebarItemsController', function($scope) {

  "use strict";
   
  $scope.items = [
    "Home",
    "Books",
    "Business",
    "Education",
    "Entertainment",
    "Food",
    "Games",
    "Health",
    "General"
  ];

  /* For selected item , change bg-color */

 $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
  };

  /* End For selected item , change bg-color */

});

/***********************************  End Sidebar Items Controller ***********************************/



