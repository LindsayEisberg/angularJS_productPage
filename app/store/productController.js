//add product to cart, view details of produt
(function () {
  "use strict";
  angular.module('store')
    .controller('ProductController', function(BootService, $scope, $location, _, $routeParams){
      var prodCtrl = this
      BootService.getBoot($routeParams.detailPage).success(function(data){
        prodCtrl.singleItem = data;

      });

      prodCtrl.currentIndex = $routeParams.detailPage;


    });


})();
