
////main product

(function () {
  'use strict';
  angular.module('store')
    .factory('BootService', function ($http, $rootScope){

    var url ="http://tiy-fee-rest.herokuapp.com/collections/lindsayeisberg_bootStruck2";

      var getBoots = function () {
        // return boots;
        return $http.get(url);
      };

      var addNewShoe = function (boot) {
        // boots.push(boot);
        $http.post(url, boot);
        $rootScope.$broadcast('boot:created');
      };

      var deleteShoe = function (id) {
        // var idx = boots.indexOf(boot);
        // boots.splice( idx, 1);
        $http.delete(url + '/' + id);
        $rootScope.$broadcast('boot:deleted');
        console.log(id);
      };

      var getSingleBoot = function(id) {
        return $http.get(url + '/' + id);
      };


      var updateBoot = function (boots, id) {
          // return boots;
          $http.put(url + '/' + id, boots);
          $rootScope.$broadcast('boot:updated');

      };




      return {
        getBoots: getBoots,
        addShoe: addNewShoe,
        deleteOneShoe: deleteShoe,
        getBoot: getSingleBoot,
        editListing: updateBoot,

      };

    })


    /////cart

    .factory('CartService', function($http, _, $rootScope){
    var cartUrl = "http://tiy-fee-rest.herokuapp.com/collections/lindsayeisberg_bootStruck_shoppingCart2";


      var getCart = function () {
        return $http.get(cartUrl);
           };

      var addToCart = function (newCartItem) {
        $http.post(cartUrl, newCartItem);
        $rootScope.$broadcast('boot:addedToCart');
           };

      var updateQuantity = function () {

      };

      var cartTotal = function () {
        if(!cart.length) return 0;
        return_.pluck(total, 'price').reduce(function (memo, num) {
          return memo + num;
        });
      };


      return {
        getShoppingCart: getCart,
        addToCart: addToCart,
        cartTotal: cartTotal
      }
    });
})();
