//edit product, delete product, add new product
(function () {
  "use strict";

angular.module('store')
  .controller('AdminController', function(BootService, $scope, $location, _, $routeParams){
    var admin = this;
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

    BootService.getBoots().success(function (data) {
       admin.boot = data;
    });
    BootService.getBoot($routeParams.detailPage).success(function(data){
      admin.singleItem = data;

    });

    admin.currentIndex = $routeParams.detailPage;

    //add a new product via admin
    admin.addNewShoe = function (newShoe) {
      BootService.addShoe(newShoe);
      $location.path('/views/admin');
      admin.boot = BootService.getBoots();
    };

    //delete product
    admin.deleteItem = function (item) {
      BootService.deleteOneShoe(item);



    };


    //edit listing
    admin.updateBoot = function (boots) {
      BootService.editListing(boots);

    };

    admin.newListing = function () {
      $location.path('/views/newListing');
};

  });
})();
