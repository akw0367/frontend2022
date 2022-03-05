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
    $scope.msgStyle = "";

    $scope.btnClick = function() {
        var myList = $scope.lunchList;
        var myMsg = "";
        var myStyle = "";
        if (myList == "") {
            myMsg = "Please enter data first";
            myStyle="color: red; border: 2px solid red"
        } else {
            myStyle="color: green; border: 2px solid green"
            var myArr = myList.split(",").filter(element => element.trim());
            if (myArr.length <= 0) {
                myMsg = "Please enter data first";
                myStyle="color: red; border: 2px solid red"
            } else if (myArr.length <= 3) {
                myMsg = "Enjoy!";
            } else {
                myMsg = "Too much!";   
            }
        }
        $scope.msg = myMsg;
        $scope.msgStyle = myStyle;
    }
}

})();
