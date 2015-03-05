//remove from cart, update cart item, cart total,


(function () {
  'use strict';
  angular.module('store')
.factory('CartService', function($http, _, $rootScope){
  var shoppingCart = [

    ];

    var getCart = function () {
      return shoppingCart;
   };

    var addToCart = function (newCartItem) {
        shoppingCart.push(newCartItem);
    };


  var updateQuantity = function () {

  };

  var total = function() {
    var total = 0;
    angular.forEach(shoppingCart, function(item) {
    total += item.quant * item.price;
      });
        return total;
      };


  return {
    getShoppingCart: getCart,
    addToCart: addToCart,
    total: total
  }
});
})();
