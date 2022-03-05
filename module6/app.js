(function () {
'use strict';

// attaching controller to the module specified in html
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

// specifically attaching scope and filter objects to be injected into controller
// protects from minification b/c string literal in array
LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
    $scope.msg = "";
    $scope.lunchList = "";

    $scope.btnClick = function() {
        var myList = $scope.lunchList;
        var myMsg = "";
        if (myList == "") {
            myMsg = "Please enter data first";
        } else {
            var myArr = myList.split(",");
            if (myArr.length <= 3) {
                myMsg = "Enjoy!"
            } else {
                myMsg = "Too much!";
            }
        }
        $scope.msg = myMsg;
    }
}

})();
