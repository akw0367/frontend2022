(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menuapp/templates/categories-list.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.log('calling get ca');

        return MenuDataService.getAllCategories();

        
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              
              return MenuDataService.getAllCategories()
                .then(function (items) {
                  console.log(items);
                  console.log($stateParams);
                  console.log(items.data[$stateParams.itemId]);

                  return MenuDataService.getItemsForCategory(items.data[$stateParams.itemId].short_name) 
                  .then(function(res) {
                      console.log(res);
                      return res.data.menu_items;
                  });
                });
            }]
    }
  });
}

})();
