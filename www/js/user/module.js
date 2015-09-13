(function(){
    'use strict';

    angular
    .module('CAssessment.user', ['LocalStorageModule'])
    .config(config)
    .run(run);

    function config($stateProvider, localStorageServiceProvider) {


        localStorageServiceProvider
            .setPrefix('CAssessment');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MenuController',
                templateUrl: 'templates/home.html',
                cache: false
                })
            .state('test', {
                url: 'test/:id',
                controller: 'TestController',
                templateUrl: 'templates/test.html',
                cache: false
            })
            .state('results', {
                url: 'results',
                controller: 'ResultsController',
                templateUrl: 'Templates/results.html',
                cache: false
            });
    }

    function run($rootScope) {
        $rootScope.getTimes = function(n){
            return new Array(n);
        };
    }
})();
