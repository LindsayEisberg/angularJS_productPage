(function () {
  'use strict';
  angular.module('store')
    .factory('BootService', function ($http, $rootScope){

    var url ="http://tiy-fee-rest.herokuapp.com/collections/lindsayeisberg_bootStruck2"
      // var boots =[
      // {
      //   name: "Jeffrey Campbell Rothes Ankle-Strap Heel",
      //   image: "../shoes/ankleStrapHeelJC.jpg",
      //   price: 160,
      //   color: "Brown",
      //   description: "Must-have leather heels, from Jeffrey Campbell, with a contrast toe-cap and fitted with adjustable hook & loop ankle straps. Propped up on a chunky block heel for a dramatic look."
      // },
      // {
      //   name: "Jeffrey Campbell Oriley Cutout Ankle Boot",
      //   image: "../shoes/blackBootJC.jpg",
      //   price: 195,
      //   color: "Black",
      //   description: "Super sleek ankle boot in soft, rich leather, from Jeffrey Campbell. Finished with dramatic cutout detailing along each side + a pull-loop at the back for easy on/off."
      // },
      // {
      //   name: "Ecote Buckled Ankle-Cuff Combat Boot",
      //   image: "../shoes/blackCombatEcote.jpg",
      //   price: 60,
      //   color: "Black",
      //   description: "Fierce combat boot in rich, supple leather, from Ecoté. Fitted with a sturdy rubber sole and finished with an oversized ankle-cuff bearing adjustable buckle closures."
      // },
      // {
      //   name: "Sol Sana Cayden Lace-Up Boot",
      //   image: "../shoes/laceUpBlack.jpg",
      //   price: 190,
      //   color: "Black",
      //   description: "Lace-up ankle bootie in rich leather from our friends at Sol Sana. Open at the front with polished metal eyelets and tonal cotton laces. Propped up on a chunky stacked heel."
      // },
      // {
      //   name: "Sam Edelman Katherine Moccasin Boot",
      //   image: "../shoes/mocsSamEdelman.jpg",
      //   price: 225,
      //   color: "Brown/Tan",
      //   description: "Cozy moccasin bootie with fringe detail at the ankle from Sam Edelman. Soft suede uppers with leather snap button straps across the instep + ankle along with contrast stitch detailing and embroidery finished with a cushioned footbed and a synthetic rubber outsole."
      // },
      // {
      //   name: "Dr. Martens 1460 Worn Broken Boot",
      //   image: "../shoes/redDocs.jpg",
      //   price: 130,
      //   color: "Red",
      //   description: "Iconic lace-up boot in smooth leather with a gently broken-in toe, from the experts at Dr. Martens. Fitted with the brand's signature PVC sole for extra bounce in your step and finished with metal eyelets + corded cotton laces. Level of breaking-in my vary slightly."
      // }
      //
      //
      //
      // ];




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

    .factory('CartService', function(_){
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
      var cartTotal = function () {
        if(!shoppingCart.length) return 0;
        return_.pluck(shoppingCart, 'price').reduce(function (memo, num) {
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
