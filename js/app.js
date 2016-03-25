var myApp = angular.module('cricsim', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/html/match.html',
            controller: 'matchContrl'
        })


    .when('/wbdIndia', {
        templateUrl: '/html/worldBankData.html',
        controller: 'wbdCntrl'
    })
    
    .when('/wbdSing', {
        templateUrl: '/html/worldBankData.html',
        controller: 'wbdCntrl2'
    })
    
     .when('/simulation', {
        templateUrl: '/html/worldBankData.html',
        controller: 'wbdCntrl2'
    });

    //wbd
});