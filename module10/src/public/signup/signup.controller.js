(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    

    SignupController.$inject = ['menuItems', 'SignupService'];
    function SignupController(menuItems, SignupService) {
      var reg = this;
      reg.menuItems = menuItems.menu_items;
      
      reg.submit = function () {
        SignupService.saveUserInfo(reg.user);
        reg.completed = true;
      };

      reg.faveInvalid = function (itemCode) {
        return !reg.menuItems.find(item => item.short_name == itemCode.toUpperCase());
      };
    };
       
    })();
    