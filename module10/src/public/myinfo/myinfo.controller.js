(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    

    MyInfoController.$inject = ['SignupService'];
    function MyInfoController(SignupService) {
      var myInfoCtrl = this;

      myInfoCtrl.registered = false;
      myInfoCtrl.firstName = "";
      myInfoCtrl.lastName = "";
      myInfoCtrl.email = "";
      myInfoCtrl.phone = "";
      myInfoCtrl.faveItem = "";


      if (SignupService.isUserRegistered()) {
        myInfoCtrl.registered = true;
        var user = SignupService.getUserInfo();
        myInfoCtrl.firstName = user.firstname;
        myInfoCtrl.lastName = user.lastname;
        myInfoCtrl.email = user.email;
        myInfoCtrl.phone = user.phone;

      }
      
      myInfoCtrl.submit = function () {
        
      };

      myInfoCtrl.faveInvalid = function (itemCode) {
        
      };
    };
       
    })();
    