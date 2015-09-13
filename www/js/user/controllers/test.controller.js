(function(){
    'use strict';

    angular
    .module('CAssessment.user')
    .controller('TestController', TestController);

    function TestController($scope, $state, tests, $ionicPopup, _, Results) {

        $scope.test = angular.copy(tests[$state.params.id]);
        $scope.resulting = resulting;
        init();

        function resulting(questions) {
            $scope.total = tests[$state.params.id].questions.length;
            $scope.result = 0;

            _.each(questions,function(question, index){
                if(question.result && question.correct === question.result){
                    console.log(index);
                    $scope.result++;
                }
            });


            Results.add({
                name: $scope.user,
                test: $scope.test.name,
                result: $scope.result,
                total: $scope.total
            });

            $ionicPopup.alert({
                title: $scope.user,
                templateUrl: 'templates/result.html',
                scope: $scope,
                okType: 'button-balanced'
            }).then(function(){
                $state.go('home');
            });
        }

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
