(function () {
  "use strict";

  angular.module('store')
    .controller('MainController', function(MansionSaleService, $scope, $location) {
      var mainCtrl = this;
      var show = false;

      $scope.on = function(){
        show = true;

      }

      $scope.off = function(){
        show = false;

      }

      $scope.showButton = function(){
        return show;
      }

      mainCtrl.mansion = MansionSaleService.getMansions();


      //add a new product via admin
      mainCtrl.addNewMansion = function (newMansion) {
        MansionSaleService.addMansion(newMansion);
        // $scope.newMansion = {};
      };

      //delete product
      mainCtrl.deleteMansion = function (mansion) {
        MansionSaleService.deleteMansion(mansion);

      };

      //edit listing
      mainCtrl.updateMansion = function (mansions) {
        MansionSaleService.editListing(mansions);

      };

      //routes
      mainCtrl.productPage = function () {
      $location.path('/mansions');
    };

      mainCtrl.adminPage = function () {
        $location.path('/admin');
      };

      mainCtrl.newListing = function () {
        $location.path('/newListing');
      };

      mainCtrl.addListing = function () {
        $location.path('/admin');
      };


    });
  })();
