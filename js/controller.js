(function () {
  "use strict";

  angular.module('store')
    .controller('MainController', function(BootService, $scope, $location, _, $routeParams) {
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

      BootService.getBoots().success(function (data) {
         mainCtrl.boot = data;
      });

      BootService.getBoot($routeParams.detailPage).success(function(data){
        mainCtrl.singleItem = data;

      });

      mainCtrl.currentIndex = $routeParams.detailPage;




      //add a new product via admin
      mainCtrl.addNewShoe = function (newShoe) {
        BootService.addShoe(newShoe);
        $location.path('/admin');


        // $scope.newMansion = {};
      };

      //delete product
      mainCtrl.deleteItem = function (item) {
        BootService.deleteOneShoe(item);

      };



      //edit listing
      mainCtrl.updateBoot = function (boots) {
        BootService.editListing(boots);

      };

      //full detail view


      //routes
      mainCtrl.productPage = function () {
      $location.path('/boots');
    };

      mainCtrl.adminPage = function () {
        $location.path('/admin');
      };

      mainCtrl.newListing = function () {
        $location.path('/newListing');
      };

      //shopping car
})
      .controller('CartController', function (CartService) {
        var cartCtrl = this;

        cartCtrl.newCartItems = CartService.getShoppingCart();
        cartCtrl.total = 0;

        cartCtrl.addToCart = function (newCartItem) {
          BootService.addToCart(newCartItem);
          $location.path('/cart');
        };
        // cart.removeItem = function (item) {
        //   CartService.removeFromCart(item);
        // }

        cartCtrl.updateTotal = function () {
          cartCtrl.total = CartService.cartTotal();
          return cartCtrl.total;
        };
      });


  })();
