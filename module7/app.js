(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var tbList = this;

    tbList.items = ShoppingListCheckOffService.getItemsToBuy();

    tbList.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex)
    }

  
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var abList = this;

  abList.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = ['a', 'b', 'c', 'd','e'];
  var itemsBought = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.buyItem = function (itemIndex) {
    var i = itemsToBuy[itemIndex];
    itemsToBuy.splice(itemIndex, 1);
    itemsBought.push(i);

  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  service.getItemsBought = function () {
      return itemsBought;
  };
}

})();
