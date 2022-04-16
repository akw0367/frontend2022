(function () {
    "use strict";
    
    angular.module('common')
    .service('SignupService', SignupService);
    
    
    function SignupService() {
      var service = this;

      /*var email = "";
      var faveItem = "";
      var firstName = "";
      var lastName = "";
      var phone = "";*/
      service.user = "";
      
      service.saveUserInfo = function(user) {
        service.user = user;
      }

      service.isUserRegistered = function() {
        return service.user != "";
      }

      service.getUserInfo = function() {
        return service.user;
      }
    
    }

    })();
    