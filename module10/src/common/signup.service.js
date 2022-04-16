(function () {
    "use strict";
    
    angular.module('common')
    .service('SignupService', SignupService);
    
    
    function SignupService() {
      var service = this;

      var email = "";
      var faveItem = "";
      var firstName = "";
      var lastName = "";
      var phone = "";
      
      service.saveUserInfo = function(user) {
        email = user.email;
        faveItem = user.faveitem;
        firstName = user.firstname;
        lastName = user.lastName;
        phone = user.phone;
      }
    
    }

    })();
    