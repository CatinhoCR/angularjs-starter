// Need to re do this so deps are not always injected but only on each component.
require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');

require('./components/home/home');

var app = angular.module('myApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.toggle', 'myApp.home']);



app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('default', {
            url: '/',
            title: "Welcome",
            views: {
                "": {
                    templateUrl: "app/components/home/home.html"
                }
            }
        });



}]);