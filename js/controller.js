var CMT = "";

myApp.controller('cntrl', function ($scope, $http) {
    $scope.itemList = [
        {
            a: 1,
            name: "Home",
            link: "/"
        }
    ];



});



myApp.controller('matchContrl', function ($scope, $http) {

    $scope.comment = "TEST";

    $scope.batList = [
        {
            name: "Dravid",
            avg: "30.13",
            str: "60",
            score: "0",
            ballFaced: "0"

        }, {
            name: "Ganguly",
            avg: "25.13",
            str: "90",
            score: "0",
            ballFaced: "0"

        }

    ];

    $scope.bowlList = [
        {
            name: "Akthar",
            eco: "4.5",
            str: "12.13",
            wicket: "0",
            balls: "0"

        },
        {
            name: "Amir",
            eco: "1.5",
            str: "4.13",
            wicket: "0",
            balls: "0"

        }

    ];

    //    $scope.batList[0].score = "2";


    $scope.onSimulate = function () {


        console.log(getRandomInt(0, 6));


        var cmmt = $scope.selectBowl + " is bowling an over to " + $scope.selectBat + "";

        var SC = 0;
        for (var i = 0; i < 6; i++) {
            var score = getRandomInt(0, 6);

            if (score == 5) {
                score = 4;
            }
            SC = SC + score;



            cmmt = cmmt + " " + score + "  ";

        }


        $scope.batList[0].score = "" + SC;

        $scope.comment = CMT + "\n" +
            cmmt;

        CMT = CMT + "\n" +
            cmmt;

        // score logic

        // score = random(0,1) <-- hit or not  <-- how gud bowler
        // score (hit) -- random(0,6) <-- 0,1,2,3,4,5(4) or 6

    }


});



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}