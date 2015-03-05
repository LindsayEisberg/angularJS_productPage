(function () {
  "use strice";
  angular.module('store')
    .directive('product', function () {
      return {
        restrict: 'E',
        scope: {
          name: '@',
          image: '@',
          price: '@',
          color: '@',
          description: '@'
        },
        templateUrl: 'store/views/productDirective.html',
        transclude: true
      };
    });
})();
