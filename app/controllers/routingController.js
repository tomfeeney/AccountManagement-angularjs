
/* ROUTING CONTROLLER */

reportingApp.controller('ItemsFocusController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});


reportingApp.config(function($routeProvider) {
    $routeProvider.
      when('/', {
		templateUrl: 'templates/reporting/dashboard.html',
      }).
      when('/reporting_sales', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Sales'
      }).

      when('/reporting_salesbytype', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Salesbytype'
      }).
      when('/reporting_downloads', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Downloads'
      }).
      when('/reporting_downloadsbytype', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Downloadsbytype'
      }).

      when('/reporting_apps', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Apps'
      }).
      when('/reporting_media', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Media'
      }).
      when('/reporting_apis', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Apis'
      }).
      when('/reporting_endusers', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Endusers'
      }).

      when('/reporting_internaldevelopers', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Internaldevelopers'
      }).
      when('/reporting_independentdeveloper', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Independentdeveloper'
      }).

      when('/reporting_audit', {
		templateUrl: 'templates/reporting/layout.html',
		controller: 'Reporting_Audit'
      }).
      
      otherwise({
		redirectTo: 'templates/reporting/dashboard.html'
      });
});

/* Reporting App List Item Controllers */

reportingApp.controller('Reporting_Sales', function($scope) {
	
	$scope.message = 'Sales';
	$scope.templateone =  {name: 'template1.html', url: 'templates/reporting/dropdowns/timedropdown.html'};
	$scope.templatetwo =  {name: 'template2.html', url: 'templates/reporting/dropdowns/regiondropdown.html'};
	$scope.templatethree =  {name: 'template3.html', url: 'templates/reporting/dropdowns/typedropdown.html'};

});

reportingApp.controller('Reporting_Salesbytype', function($scope) {
	
	$scope.message = 'Sales by Type';
	$scope.templateone =  {name: 'template1.html', url: 'templates/reporting/dropdowns/timedropdown.html'};
	$scope.templatetwo =  {name: 'template2.html', url: 'templates/reporting/dropdowns/regiondropdown.html'};
	$scope.templatethree =  {name: 'template3.html', url: 'templates/reporting/dropdowns/typedropdown.html'};
	
});

reportingApp.controller('Reporting_Downloads', function($scope) {
	
	$scope.message = 'Downloads';
	$scope.templateone =  {name: 'template1.html', url: 'templates/reporting/dropdowns/timedropdown.html'};
	$scope.templatetwo =  {name: 'template2.html', url: 'templates/reporting/dropdowns/regiondropdown.html'};
	$scope.templatethree =  {name: 'template3.html', url: 'templates/reporting/dropdowns/pricedropdown.html'};
	
});

reportingApp.controller('Reporting_Downloadsbytype', function($scope) {
	
	$scope.message = 'Downloads by Type';
	$scope.templateone =  {name: 'template1.html', url: 'templates/reporting/dropdowns/timedropdown.html'};
	$scope.templatetwo =  {name: 'template2.html', url: 'templates/reporting/dropdowns/regiondropdown.html'};
	$scope.templatethree =  {name: 'template3.html', url: 'templates/reporting/dropdowns/typedropdown.html'};
});

reportingApp.controller('Reporting_Apps', function($scope) {
	
	$scope.message = 'Apps';
	
});

reportingApp.controller('Reporting_Media', function($scope) {
	
	$scope.message = 'Media';
	
});

reportingApp.controller('Reporting_Apis', function($scope) {
	
	$scope.message = 'APIs';
	
});

reportingApp.controller('Reporting_Endusers', function($scope) {
	
	$scope.message = 'End Users';
	
});

reportingApp.controller('Reporting_Internaldevelopers', function($scope) {
	
	$scope.message = 'Internal Developers';
	
});

reportingApp.controller('Reporting_Independentdeveloper', function($scope) {
	
	$scope.message = 'Independent Developer';
	
});

reportingApp.controller('Reporting_Audit', function($scope) {
	
	$scope.message = 'Audit';
	
});

/* Reporting App List Item Controllers */


/* END ROUTING CONTROLLER */


