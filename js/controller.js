(function () {
  "use strict";

  angular.module('store')
    .controller('MainController', function(MansionSaleService, $scope, $location) {
      var mainCtrl = this;

      mainCtrl.mansion = MansionSaleService.getMansions();

      //add a new product via admin
      mainCtrl.addNewMansion = function (newMansion) {
        MansionSaleService.addMansion(newMansion);
        $scope.newMansion = {};
      };





      //routes
      mainCtrl.productPage = function () {
      $location.path('/mansions');
    };

      mainCtrl.adminPage = function () {
        $location.path('/admin');
      };

    });
  })();
