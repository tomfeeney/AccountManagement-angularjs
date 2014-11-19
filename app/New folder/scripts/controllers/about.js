'use strict';

/**
 * @ngdoc function
 * @name angularAmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAmApp
 */
angular.module('angularAmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
