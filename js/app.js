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
  });
})();
