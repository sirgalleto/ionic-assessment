(function(){
    'use strict';

    angular
    .module('CAssessment.user')
    .factory('Results', Results);

    function Results(localStorageService) {

        return{

            get: function(){
                return localStorageService.get('results');
            },
            add: function(result){

                var results = localStorageService.get(
                    'results'
                );

                if(!results) results = [result];
                else results.push(result);

                localStorageService.set('results', results);
            }
        };
    }
})();
