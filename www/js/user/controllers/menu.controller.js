(function(){
    'use strict';

    angular
        .module('CAssessment.user')
        .controller('MenuController', MenuController);

    function MenuController($scope, tests, $state) {

        $scope.tests = tests;
        $scope.goToTest = goToTest;

        function goToTest(test) {
            $state.go('test', {id: test});
        }
    }
})();
