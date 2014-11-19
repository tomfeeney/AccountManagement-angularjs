
/***********************************  Image Slider Controller ***********************************/
   
AngularLibraryApp.controller('AngularImagesliderController', function($scope) {

  "use strict";

  $scope.myInterval = 5000;
  var slides = $scope.slides = [];

 
 var slides = $scope.slides = [{
    'imgName':'themes/blue/images/firstslide.png',
  },
  
  {
    'imgName':'themes/blue/images/secondslide.png',
  },

  {
    'imgName':'themes/blue/images/thirdslide.png',
  }];

});

/***********************************  End Image Slider Controller ***********************************/
