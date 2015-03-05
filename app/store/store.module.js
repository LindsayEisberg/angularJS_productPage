(function (){
  "use strict";

  angular.module('store',[
    'ngRoute',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/store/boots', {
        templateUrl: 'store/views/products.html',
        controller:'MainController as mainCtrl'
      })
      .when('/store/admin', {
        templateUrl: 'store/views/admin.html',
        controller:'MainController as mainCtrl'
      })
      .when('/store/newListing', {
        templateUrl: 'store/views/newListing.html',
        controller: "AdminController as adminCtrl"
      })
      .when('/store/boots/:detailPage', {
        templateUrl: 'store/views/detailPage.html',
        controller:'ProductController as productCtrl'
      })
      .when('/store/cart', {
        templateUrl: 'store/views/addToCart.html',
        controller: "CartController as cartCtrl"
      });
  })
  .constant('_', _);

})();
