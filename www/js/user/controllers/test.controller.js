(function(){
    'use strict';

    angular
    .module('CAssessment.user')
    .controller('TestController', TestController);

    function TestController($scope, $state, tests, $ionicPopup) {

        $scope.test = tests[$state.params.id];
        init();

        function init() {
            $ionicPopup.prompt({
                title: "What's your name?",
                inputType: 'text',
                inputPlaceholder: 'Name',
                okType: 'button-balanced',
                cancelType: 'button-clear button-balanced'
            }).then(function(res) {
                if(res){
                    $scope.user = res;
                }
                else{
                    $state.go('home');
                }
            });
        }
    }
})();
