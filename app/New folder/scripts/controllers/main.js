'use strict';

/**
 * @ngdoc function
 * @name angularAmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAmApp
 */
angular.module('angularAmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
