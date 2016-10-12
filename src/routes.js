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
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/menuapp/templates/menu-categorylist.template.html',
    controller: 'MenuCategoryListController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(
          function (result) {
            return result.data;
          },
          function (err) {
            return [];
          }
        );
      }]
    }
  })

  // Item detail
  .state('categoryList.items', {
    url: '/items/{shortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemListController as itemsController',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.shortName).then(
          function (result) {
            return result.data.menu_items;
          },
          function (err) {
            return [];
          }
        );
      }]
    }
  });

}

})();
