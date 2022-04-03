(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var itemDetail = this;
  itemDetail.items = items;  
}

})();
