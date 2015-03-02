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
      .when('/mansions', {
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
      .when('/not-found', {
        templateUrl: 'views/not-found.html',
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });
})();
