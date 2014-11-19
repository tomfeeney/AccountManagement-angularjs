
/***********************************  Table Sorting Controller ***********************************/

AngularLibraryApp.controller('AngularSortableTableController', function($scope) {

  "use strict";

  $scope.orderByField = 'Name';
  $scope.reverseSort = false;
  
  $scope.data = {
    tablelist: [{
      Order :1,
      Name: "Earth",
      Size:"L",
      Color: "Black",
      Time:"11:00pm",
      Distance:1000.769
    },
    {
      Order :2,
      Name: "Moon",
      Size:"M",
      Color: "Blue",
      Time:"2:00pm",
      Distance:0
    },
    {
      Order :3,
      Name: "Sun",
      Size:"S",
      Color: "Green",
      Time:"10:00pm",
      Distance:1000.2
    }]
  };
  
});

/***********************************  End Table Sorting Controller ***********************************/


