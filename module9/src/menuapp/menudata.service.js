(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath'];
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return promise;
  }

  service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    });

    return response;
  }
}

})();
