(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);

MenuController.$inject = ['dummy'];
function MenuController(dummy) {
  var $ctrl = this;
  //$ctrl.menuCategories = menuCategories;
  console.log(dummy);
  $ctrl.dummy = dummy;
}


})();
