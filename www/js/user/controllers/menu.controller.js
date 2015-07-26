(function(){
    'use strict';

    angular
        .module('CAssessment.user')
        .controller('MenuController', MenuController);

    function MenuController($scope, tests) {

        $scope.tests = tests;
    
    }
})();
