(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryListController', MenuCategoryListController);


MenuCategoryListController.$inject = ['categories'];
function MenuCategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories;
}

})();
