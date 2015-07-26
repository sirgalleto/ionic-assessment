(function(){
    'use strict';

    angular
    .module('CAssessment.user', [])
    .config(config);

    function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MenuController',
                templateUrl: 'templates/home.html'
                })
            .state('test', {
                url: 'test/:id',
                controller: 'TestController',
                templateUrl: 'templates/test.html'
            });
    }
})();
