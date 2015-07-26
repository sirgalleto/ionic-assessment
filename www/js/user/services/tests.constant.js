(function(){
    'use strict';

    var tests = [
        {
            name: 'first'
        },
        {
            name: 'second'
        }
    ];

    angular
        .module('CAssessment.user')
        .constant('tests', tests);
})();
