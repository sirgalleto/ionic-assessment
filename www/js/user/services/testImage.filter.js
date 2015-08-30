(function(){
    'use strict';

    angular
        .module('CAssessment.user')
        .filter('testImage', testImage);

    function testImage() {

        return function(image, base){

            return 'img/'+base+'/'+image;
        };
    }

})();
