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

    //    $scope.comment = "TEST";

    $scope.batList = [
        {
            name: "Dravid",
            avg: "30.13",
            str: "60",
            score: "0",
            ballFaced: "0",
            currStr: "0"

        }, {
            name: "Ganguly",
            avg: "25.13",
            str: "90",
            score: "0",
            ballFaced: "0",
            currStr: "0"

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

    //    var SC = 0;
    //    var BF = 0;

    $scope.onSimulate = function () {

        if ($scope.selectBowl != undefined && $scope.selectBat != undefined) {
            var cmmt = $scope.selectBowl + " is bowling an over to " + $scope.selectBat + "";




            for (var i = 0; i < $scope.batList.length; i++) {



                if ($scope.selectBat == $scope.batList[i].name) {
                    var SC = parseInt($scope.batList[i].score);
                    var BF = parseInt($scope.batList[i].ballFaced)
                    var res_Obj = simulateScore(SC, BF, cmmt);
                    var currStr = ((SC / BF) * 100).toFixed(2);

                    $scope.batList[i].score = "" + res_Obj.SC;
                    $scope.batList[i].ballFaced = "" + res_Obj.BF;
                    $scope.batList[i].currStr = "" + currStr;

                }
            }

            //currStr

            $scope.comment = CMT + "\n" +
                res_Obj.cmmt;

            CMT = CMT + "\n" +
                res_Obj.cmmt;

            // score logic

            // score = random(0,1) <-- hit or not  <-- how gud bowler
            // score (hit) -- random(0,6) <-- 0,1,2,3,4,5(4) or 6
        } else {
            alert("Select Options");
        }




    }


});

function simulateScore(tmp_SC, tmp_BF, tmp_cmmt) {
    var obj = {};

    for (var i = 0; i < 6; i++) {

        var hit = getRandomInt(0, 1);
        var score = getRandomInt(0, 6);

        if (score == 5) {
            score = 4;
        }
        tmp_SC = tmp_SC + hit * score;
        tmp_BF = tmp_BF + 1;

        tmp_cmmt = tmp_cmmt + " " + hit * score + "  ";

    }

    obj.SC = tmp_SC;
    obj.BF = tmp_BF;
    obj.cmmt = tmp_cmmt;

    return obj;

}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}