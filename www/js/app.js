(function(){

    angular
    .module('CAssessment',['ionic', 'ngUnderscore', 'CAssessment.user'] )
    .config(config)
    .run(run);

    function config($stateProvider, $urlRouterProvider) {


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

    }

    function run($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    }
})();
