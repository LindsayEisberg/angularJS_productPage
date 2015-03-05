(function () {
  "use strict";
  angular.module("bootStruck")
    .controller("MainController", function ($location) {
      var mainCtrl = this;

      /////splash page Routing/////
      mainCtrl.productPage = function () {
      $location.path('/store/boots');
    };

      mainCtrl.adminPage = function () {
        $location.path('/store/admin');
      };

  });
})();
