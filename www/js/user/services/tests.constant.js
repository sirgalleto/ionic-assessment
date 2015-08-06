(function(){
    'use strict';

    var tests = [
        {
            name: 'First Assessment',
            questions:[
                {
                    instruction: 'This is a instruction',
                    title:'This is my dog Ali. It ___ small ears and a black nose',
                    //imagen de un perro
                    image: 'test.png',
                    answers: {
                        a: {
                            description: 'am'
                        },
                        b: {
                            description: 'have'
                            },
                        c: {
                            description: 'has'
                        },
                        d: {
                            description: 'is'
                        }
                    },
                    correct: 'c'
                },

                {
                    title:'The book is ___ the table',
                    //imagen de un libro sobre la mesa
                    answers: {
                        a: {
                            description: 'under',
                            image: 'test.png'
                        },
                        b: {
                            description: 'on'
                        },
                        c: {
                            description: 'next to'
                        },
                        d: {
                            description: 'in'
                        }
                    },
                    correct: 'a'
                },

                {
                    title:'Where is Betsy from?',
                    //bandera de colombia
                    answers: {
                        a: {
                            description: 'She is Spanish'
                        },
                        b: {
                            description: 'She is from Spain'
                        },
                        c: {
                            description: 'She is Colombian'
                        },
                        d: {
                            description: 'She is from Colombia'
                        }
                    },
                    correct: 'a'
                },

                {
                    title: 'This person gelps people when they are very Sick, Who is it?',
                    //Imagen de un hospital
                    answers:{
                        a: {
                            description: 'Teacher'
                        },
                        b: {
                            description: 'Nurse'
                        },
                        c: {
                            description: 'Pilot'
                        },
                        d: {
                            description: 'Doctor'
                        }
                    },
                    correct: 'd'
                },

                {
                    title: 'The person flies a Plane. Who is it?',
                    //Imagen de un avion
                    answers:{
                        a: {
                            description: 'Farmer'
                        },
                        b: {
                            description: 'Cook'
                        },
                        c: {
                            description: 'Pilot'
                        },
                        d: {
                            description: 'Dentist'
                        }
                    },
                    correct: 'c'
                },
                {
                    title: 'How much does the backpack cost?',
                    answers: {
                        a: {
                            description: 'niney six dollars'
                        },
                        b: {
                            description: 'forty five dollars'
                        },
                        c: {
                            description: 'four dollars'
                        },
                        d: {
                            description: 'fourteen dollars'
                        }
                    },
                    correct: 'b'
                },

                {
                    title: 'Where is Mary?',
                    //Imagen de una niña en una habitación
                    answers:{
                        a: {
                            description: 'She is in the bathroom'
                        },
                        b: {
                            description: 'She is in the kitchen'
                        },
                        c: {
                            description: 'She is in the bedroom'
                        },
                        d: {
                            description: 'She is in the living room'
                        }
                    },
                    correct: 'c'
                },

                {
                    title:'Diane: What do you do in the morning?\nJoseph:_______',
                    //Imagen de ir al colegio
                    answers:{
                        a: {
                            description: 'At seven óclock'
                        },
                        b: {
                            description: 'On monday'
                        },
                        c: {
                            description: 'I go to school'
                        },
                        d: {
                            description: 'Soda and cookies'
                        }
                    },
                    correct: 'c'
                },

                {
                    title:'Select the correct answer',
                    //Imagen de un niño tocando piano
                    answers:{
                        a: {
                            description: 'He can play soccer and he can play the guitar'
                        },
                        b: {
                            description: 'He can play the guitar and he can play soccer'
                        },
                        c: {
                            description: 'He can play tennis and can play the violin'
                        },
                        d: {
                            description: 'He can play tennis and he can play soccer'
                        }
                    },
                    correct: 'c'
                },

                {
                    title: 'Select the picture that shows. Cut the paper',
                    answers:{
                        a: {
                            description: 'Imagen de alguien escribiendo'
                        },
                        b: {
                            description: 'Imagen de alguien coloreando'
                        },
                        c: {
                            description: 'Imagen de alguien cortando papel'
                        },
                        d: {
                            description: 'Imagen de alguien pintando'
                        }
                    }
                }
            ]
        }
    ];

    angular
        .module('CAssessment.user')
        .constant('tests', tests);
})();
