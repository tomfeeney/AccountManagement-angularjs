
/***********************************  Single Select Controller ***********************************/

// Countries with option of search

AngularLibraryApp.controller('AngularCountriesController', function($scope) {

    $scope.Countries = {};
    $scope.filterCountriesOptions = {
        stores: [
            {id : 1, name : 'None'},
            {id : 2, name : 'United States'},
            {id : 3, name : 'United Kingdom'},
            {id : 4, name : 'Afghanistan'},
            {id : 5, name : 'Aland Islands'},
            {id : 6, name : 'India'},
            {id : 7, name : 'Pakistan'},
        ]
    };

});


// Challenge Questions

AngularLibraryApp.controller('AngularChallengequestionController', function($scope) {

    $scope.Challengequestion = {};
    $scope.filterChallengequestionOptions = {
        stores: [
            {id : 1, name : 'What is your favourite place?'},
            {id : 2, name : 'What is your favourite food?'},
            {id : 3, name : 'Where were you born?'},
        ]
    };

});

/***********************************  End Single Select Controller ***********************************/

















