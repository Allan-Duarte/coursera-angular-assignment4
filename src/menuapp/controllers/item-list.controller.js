(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemsController = this;
  itemsController.items = items;
}

})();
