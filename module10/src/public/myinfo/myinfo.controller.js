(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    

    MyInfoController.$inject = ['SignupService', 'ApiPath', 'menuItems'];
    function MyInfoController(SignupService, ApiPath, menuItems) {
      var myInfoCtrl = this;
      myInfoCtrl.basePath = ApiPath;
      myInfoCtrl.menuItems = menuItems;

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

        myInfoCtrl.item = menuItems.menu_items.find(item => item.short_name == user.faveitem.toUpperCase());
      }
  
    };
       
    })();
    