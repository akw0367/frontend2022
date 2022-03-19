(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var nitc = this;

        nitc.searchTerm = "";

        nitc.getMatchedMenuItems = function () {
            MenuSearchService.getMatchedMenuItems(nitc.searchTerm);
        }
    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;
    
      service.getMatchedMenuItems = function (searchTerm) {
        console.log(searchTerm);
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }).then(function (result) {

            console.log(result);
            // process result and only keep items that match
            var foundItems = result.data.menu_items.filter((item) => {
                console.log(item.name);
                return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            });;

            console.log(foundItems);
        
            // return processed items
            return foundItems;
        });
      };
    }
    
    })();
    