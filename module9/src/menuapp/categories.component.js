(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
