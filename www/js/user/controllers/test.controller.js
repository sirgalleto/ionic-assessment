(function(){
    'use strict';

    angular
        .module('CAssessment.user')
        .controller('TestController', TestController);

    function TestController($scope, $state, tests, $ionicPopup) {

        $scope.test = tests[$state.params.id].name;
        init();

        function init() {

            $ionicPopup.show({
                template: '<input type="text" ng-model="user">',
                title: 'Whats your name?',
                scope: $scope,
                buttons: [
                    {
                        text: '<b>Ok</b>',
                        type: 'button-balanced',
                        onTap: function(e){
                            if(!$scope.user){
                                e.preventDefault();
                            }
                            else{
                                return $scope.user.name;
                            }
                        }
                    }
                ]

            }).then(function(res){
                $scope.user.name = res;
            });
        }
    }
})();
