(function () {
  "use strict";

  angular.module('store')
    .controller('MainController', function(MansionSaleService, $scope) {
      var mainCtrl = this;

      mainCtrl.mansion = MansionSaleService.getMansions();
    });
  })();
