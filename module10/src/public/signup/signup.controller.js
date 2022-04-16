(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    

    SignupController.$inject = ['menuCategories', 'SignupService'];
    function SignupController(menuCategories, SignupService) {
      var reg = this;
      reg.menuCategories = menuCategories;
      
      reg.submit = function () {
        SignupService.saveUserInfo(reg.user);
        reg.completed = true;
      };

      reg.faveInvalid = function (itemCode) {
        return !menuCategories.find(item => item.short_name == itemCode.toUpperCase());
      };
    };
       
    })();
    