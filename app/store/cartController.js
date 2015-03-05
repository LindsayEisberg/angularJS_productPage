//remove from cart, update cart item, cart total,

(function () {
  "use strict";

  angular.module('store')
.controller('CartController', function (CartService, $location) {
        var cartCtrl = this;

        cartCtrl.shoppingCart = CartService.getShoppingCart();

        cartCtrl.total = CartService.total();


        cartCtrl.addItem = function (newItem) {
          CartService.addToCart(newItem);
          $location.path('/store/cart');
        };
        // cart.removeItem = function (item) {
        //   CartService.removeFromCart(item);
        // }

        // cartCtrl.updateTotal = function () {
        //   cartCtrl.total = CartService.cartTotal();
        //   return cartCtrl.total;
        // };
      });
    })();
