var home = angular.module('myApp.home', ['ngAnimate', 'ui.bootstrap', 'ui.bootstrap.tpls']);
var templateDir = 'templates/';

function homeCtrl($scope) {
    $scope.welcomeText = 'Dashboard / Home dummy page!';

    $scope.toggleValue = true;
    $scope.togglerVal = true;
    $scope.toggleOff = false;

    $scope.view_tab = 'tab1';
    $scope.changeTab = function(tab) {
        $scope.view_tab = tab;
    }
}

home.controller('homeCtrl', homeCtrl);