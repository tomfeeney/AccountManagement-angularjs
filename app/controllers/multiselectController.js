
/***********************************  Multi Select Controller ***********************************/

AngularLibraryApp.controller('AngularMultiSelectRecipientsController', function($scope,$http) {

    $scope.url = 'templates/recipients.json';
    $scope.recipients = [];
    $scope.recipientsList = [];

    $scope.fetchRecipients = function() {
        $http.get($scope.url).then(function(result){
            $scope.recipientsList = result.data;
        });
    }

    $scope.fetchRecipients();
    
});

/***********************************  End Multi Select Controller ***********************************/


