(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // route to home by default
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menuapp/templates/categories-list.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      // do not show categories view until data is retrieved
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      // do not show items view until data is retrieved
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              // first get categories, then use user-clicked index to get short name
              // to query for menu items
              return MenuDataService.getAllCategories()
                .then(function (items) {
                  return MenuDataService.getItemsForCategory(items.data[$stateParams.itemId].short_name) 
                  .then(function(res) {
                      return res.data.menu_items;
                  });
                });
            }]
    }
  });
}

})();
