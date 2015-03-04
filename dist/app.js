(function(app) {

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/main.html"
        })
        .when('/not-found', {
          templateUrl: "common/views/not-found.html"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });


}(angular.module("bootStruck", [
    'ngRoute',
    // 'ngAria',
    'store'
])));

(function () {
  "use strict";
  angular.module("bootStruck")
    .controller("MainCtrl", function () {
      var mainCtrl = this;

      /////splash page Routing/////
      mainCtrl.productPage = function () {
      $location.path('../store/boots');
    };

      mainCtrl.adminPage = function () {
        $location.path('../store/admin');
      };

  });
})();

(function (){
  "use strict";

  angular.module('store',[
    'ngRoute',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/store/boots', {
        templateUrl: 'store/views/products.html',
        controller:'ProductController as productCtrl'
      })
      .when('/store/admin', {
        templateUrl: 'store/views/admin.html',
        controller:'AdminController as adminCtrl'
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






