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
                localStorageService.set(
                    localStorageService.get('results').push(result)
                );
            }
        };
    }
})();
