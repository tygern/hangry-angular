'use strict';

angular.module('hangryApp')
  .controller('RestaurantListCtrl', function ($scope, RestaurantService, LocationService) {
    LocationService.find().then(RestaurantService.getList).then(function (response) {
      $scope.restaurants = response;
    });
  });
