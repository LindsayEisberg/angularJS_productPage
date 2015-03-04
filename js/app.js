(function (){
  "use strict";

  angular.module('store',[
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller:'MainController as mainCtrl'
      })
      .when('/boots', {
        templateUrl: 'views/products.html',
        controller:'MainController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller:'MainController as mainCtrl'
      })
      .when('/newListing', {
        templateUrl: 'views/newListing.html',
        controller: "MainController as mainCtrl"
      })
      .when('/boots/:detailPage', {
        templateUrl: 'views/detailPage.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/addToCart.html',
        controller: "MainController as mainCtrl"
      })
      .when('/not-found', {
        templateUrl: 'views/not-found.html',
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  })
  .constant('_', _);

})();
