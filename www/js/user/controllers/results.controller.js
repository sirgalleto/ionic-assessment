(function(){
    'use strict';

    angular
    .module('CAssessment.user')
    .controller('ResultsController', ResultsController);

    function ResultsController($scope, $ionicPopup, Results) {

        $scope.results = Results.get();

        $scope.showResult = function(result){

            $scope.user = result.name;
            $scope.result = result.result;
            $scope.total = result.total;

            $ionicPopup.alert({
                title: $scope.user,
                templateUrl: 'templates/result.html',
                scope: $scope,
                okType: 'button-balanced'
            });
        };
    }
})();
