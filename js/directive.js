myApp.directive('batscorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/battingScoreCard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('bowlscorecard', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/bowlingScoreCard.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});

myApp.directive('headerbar', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: 'html/headerBar.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;



        }
    };


});