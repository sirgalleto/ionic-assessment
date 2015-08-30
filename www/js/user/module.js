(function(){
    'use strict';

    angular
    .module('CAssessment.user', ['LocalStorageModule'])
    .config(config);

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
            });
    }
})();
