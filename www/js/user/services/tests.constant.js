(function(){
    'use strict';

    var tests = [
        {
            name: 'first',
            questions:[
                {
                    title:'Question 1',
                    answers: {
                        a: 'This is a answer ',
                        b: 'This is a second answer',
                        c: 'This is a third answer',
                        d: 'This is a finish answer'
                    },
                    correct: 'a'
                },

                {
                    title:'Question 2',
                    answers: {
                        a: 'This is a answer ',
                        b: 'This is a second answer',
                        c: 'This is a third answer',
                        d: 'This is a finish answer'
                    },
                    correct: 'a'
                }
            ]
        },
        {
            name: 'second'
        }
    ];

    angular
        .module('CAssessment.user')
        .constant('tests', tests);
})();
