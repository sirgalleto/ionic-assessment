(function(){
    'use strict';

    angular
    .module('CAssessment.user')
    .controller('ResultsController', ResultsController);

    function ResultsController($scope, Results) {

        $scope.results = Results.get();
    }
})();
