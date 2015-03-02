(function () {
  'use strict';
  angular.module('store')
    .factory('MansionSaleService', function (){
      var mansions =[
      {
        name: "The Calhoun Mansion",
        image: "../mansions/calhounMansion.JPG",
        price: 100,
        description: "This is a really big house named after someone famous"
      },
      {
        name: "Aiken Rhett House",
        image: "../mansions/aikenRhett.jpg",
        price: 100,
        description: "This is a really big house named after someone famous"
      },
      {
        name: "Nathaniel Russell House",
        image: "../mansions/natRussell.jpg",
        price: 100,
        description: "This is a really big house named after someone famous"
      },
      {
        name: "20 South Battery",
        image: "../mansions/20SouthBattery.jpg",
        price: 100,
        description: "This is a really big house named after someone famous"
      },

      ];


      var shoppingCart = [

      ];


      var getMansion = function () {
        return mansions;
      };

      var addNewMansion = function (mansion) {
        mansions.push(mansion);
      };

      var deleteMansion = function (mansion) {
        var idx = mansions.indexOf(mansion);
        mansions.splice( idx, 1);
        console.log(mansion);
      };


      var updateMansion = function (mansion) {
          return mansion;

      };

      var getCart = function () {
          return shoppingCart;
           };

      var addToCart = function (newCartItem) {
             shoppingCart.push(newCartItem);
           };
      //
      // var cartTotal = function () {
      //   var total = 0;
      //     getCart().success(function(cartItem) {
      //       for(var i = 0; i < cartItem.length; i++) {
      //         total += (cartItem[i].price * cartItem[i].quantity)
      //           }
      //           console.log(total);
      //         });
      //         return total;
      //       };


      return {
        getMansions: getMansion,
        addMansion: addNewMansion,
        deleteOneMansion: deleteMansion,
        editListing: updateMansion,
        getShoppingCart: getCart,
        addToCart: addToCart
        // cartTotal: cartTotal
      };

    });

})();
