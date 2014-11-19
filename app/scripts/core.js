
/*--******************************************** Core JS ********************************************--*/

'use strict';

var AngularLibraryApp = angular.module('AngularLibraryApp', ["ui.bootstrap","ngRoute","ui.select","responsivetabmenu","angularscrollspy","textAngular"])

.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/001.html',
        controller: 'MainCtrl'
      })
      .when('/001a', {
        templateUrl: 'views/001a.html',
        controller: 'AboutCtrl'
      })
      .when('/001b', {
        templateUrl: 'views/001b.html',
        controller: 'AboutCtrl'
      })
      .when('/002', {
        templateUrl: 'views/002.html',
        controller: 'AboutCtrl'
      })
      .when('/003', {
        templateUrl: 'views/003.html',
        controller: 'AboutCtrl'
      })
      .when('/004', {
        templateUrl: 'views/004.html',
        controller: 'AboutCtrl'
      })
      .when('/004a', {
        templateUrl: 'views/004a.html',
        controller: 'AboutCtrl'
      })
      .when('/005', {
        templateUrl: 'views/005.html',
        controller: 'AboutCtrl'
      })
      .when('/006', {
        templateUrl: 'views/006.html',
        controller: 'AboutCtrl'
      })
      .when('/007', {
        templateUrl: 'views/007.html',
        controller: 'AboutCtrl'
      })
      .when('/008', {
        templateUrl: 'views/008.html',
        controller: 'AboutCtrl'
      })
      .when('/008a', {
        templateUrl: 'views/008a.html',
        controller: 'AboutCtrl'
      })
      .when('/009', {
        templateUrl: 'views/009.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*--******************************************** End Core JS ********************************************--*/
