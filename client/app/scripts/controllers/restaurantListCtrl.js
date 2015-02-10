'use strict';

angular.module('hangryApp')
  .controller('RestaurantListCtrl', function ($scope, RestaurantService, LocationService) {
    var userLocation;
    $scope.tags = [];

    function getRestautrants(locationData) {
      locationData['tags[]'] = $scope.tags;
      return RestaurantService.getList(locationData).then(function (response) {
        $scope.restaurants = response;
      });
    }

    LocationService.find().then(function (locationData) {
      userLocation = locationData;
      getRestautrants(locationData);
    });

    $scope.$watchCollection('tags', function () {
      if(userLocation) {
        getRestautrants(userLocation);
      }
    });

    $scope.addTag = function () {
      if ($scope.tags.indexOf($scope.newTag) === -1) {
        $scope.tags.push($scope.newTag);
      }

      $scope.newTag = undefined;
    };

    $scope.removeTag = function (tag) {
      $scope.tags = $scope.tags.filter(function (t) {
        return t !== tag;
      });
    };
  });
