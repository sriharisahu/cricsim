var myApp = angular.module('cricsim', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/html/match.html',
            controller: 'matchContrl'
        });

    //wbd
});