(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {

  var itemDetail = this;

  itemDetail.items = items;

  console.log(itemDetail.items);
  
}

})();
