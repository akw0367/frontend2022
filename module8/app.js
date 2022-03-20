(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<found',
                onRemove: '&removeItem'
            },
            controller: NarrowItDownController,
            controllerAs: 'ctrler',
            bindToController: true
        }

        return ddo;
        
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var ctrler = this;

        ctrler.searchTerm = "";
        ctrler.found = [];

        ctrler.getMatchedMenuItems = function () {
            var promise = MenuSearchService.getMatchedMenuItems(ctrler.searchTerm);

            promise.then(function(response) {
                ctrler.found = response;
                console.log(ctrler.found);
            })
            .catch(function(error) {
                console.log("oopsy daisy");
            });
            
        }

        ctrler.removeItem = function(index) {
            ctrler.found.splice(index, 1);
        }
    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;
    
      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }).then(function (result) {

            console.log(result);
            // process result and only keep items that match
            var foundItems = result.data.menu_items.filter((item) => {
                return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            });;

            console.log(foundItems);
        
            // return processed items
            return foundItems;
        });
      };
    }
    
    })();
    