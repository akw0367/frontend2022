(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignupController', SignupController);
    

    SignupController.$inject = ['menuCategories'];
    function SignupController(menuCategories) {
      var reg = this;
      reg.menuCategories = menuCategories;
      
      reg.submit = function () {
        reg.completed = true;
      };

      reg.faveInvalid = function (itemCode) {
        return !menuCategories.find(item => item.short_name == itemCode.toUpperCase());
      };
    };
       
    })();
    