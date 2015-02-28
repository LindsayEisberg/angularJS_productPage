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

      var getMansion = function () {
        return mansions;
      };

      return {
        getMansions: getMansion
      };

    });

})();
