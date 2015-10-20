(function(){
    'use strict';

    var tests = [
        {
            name: 'First Assessment',
            questions:[
                {
                    instruction: 'Vocabulary & Grammar. Select the correct word to complete the sentence',
                    title:'This is my dog Ali. It ___ small ears and a black nose',
                    //imagen de un perro
                    image: 'perro.jpg',
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
                    instruction: 'Select the correct word to complete the sentence',
                    title:'The book is ___ the table',
                    //imagen de un libro sobre la mesa
                    image: 'book.jpg',
                    answers: {
                        a: {
                            description: 'under'
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
                    instruction: 'Select the correct answer',
                    title:'Where is Betsy from?',
                    //bandera de colombia
                    image: 'colombia.jpeg',
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
                    correct: 'd'
                },

                {
                    title: 'This person helps people when they are very Sick, Who is it?',
                    //Imagen de un hospital
                    image: 'hospital.png',
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
                    image: 'avion.jpeg',
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
                    image: '45.png',
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
                    image: 'Mary.jpg',
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
                    image: 'gotoschool.jpg',
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
                /*
                {
                    title:'Select the correct answer',
                    //Imagen de un niño tocando piano
                    image: 'playpiano.jpg',
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
                */
                {
                    title: 'Select the picture that shows. Cut the paper',
                    answers:{
                        a: {
                            image: 'writing.jpg'
                        },
                        b: {
                            image: 'color.jpg'
                        },
                        c: {
                            image: 'cuttingpaper.jpg'
                        },
                        d: {
                            image: 'paiting.jpg'
                        }
                    },
                    correct: 'c'
                },

                {
                    title: 'Select the correct answer.',
                    //Imagen señora comiendo galletas
                    image: 'eatingcookies.jpeg',
                    answers:{
                        a: {
                            description: 'She like cookies'
                        },
                        b: {
                            description: 'She doesn\'t like cookies'
                        },
                        c: {
                            description: 'She has lunch'
                        },
                        d:{
                            description: 'She has dinner'
                        }
                    },
                    correct: 'a'
                },

                {
                    title: 'Pamela has blond hair.',
                    answers:{
                        a:{
                            image: 'blackhair.jpeg'
                        },
                        b: {
                            image: 'blondhair.jpg'
                        },
                        c: {
                            image: 'canas.jpeg'
                        },
                        d: {
                            image: 'redhair.jpg'
                        }
                    },
                    correct: 'b'
                }
            ]
        }
    ];

    angular
        .module('CAssessment.user')
        .constant('tests', tests);
})();
