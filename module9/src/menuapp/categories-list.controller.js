(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  console.log(items);
  var categoriesList = this;
  categoriesList.items = items.data;
}

})();
