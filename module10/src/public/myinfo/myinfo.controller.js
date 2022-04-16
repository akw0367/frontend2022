(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    

    MyInfoController.$inject = ['SignupService'];
    function MyInfoController(SignupService) {
      var myInfoCtrl = this;

      myInfoCtrl.registered = false;
      
      myInfoCtrl.submit = function () {
        
      };

      myInfoCtrl.faveInvalid = function (itemCode) {
        r
      };
    };
       
    })();
    