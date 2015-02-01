'use strict';

angular.module('hangryApp')
  .controller('RestaurantListCtrl', function ($scope, RestaurantService) {
    RestaurantService.getList().then(function (response) {
      $scope.restaurants = response.data
    });
  });
