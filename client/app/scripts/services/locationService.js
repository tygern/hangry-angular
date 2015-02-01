'use strict';

angular.module('hangryApp')
  .service('LocationService', function ($window, $q, geolocation) {
    function find() {
      var deferred = $q.defer();

      function resolveLocation() {
        deferred.resolve({
          latitude: $window.localStorage.latitude,
          longitude: $window.localStorage.longitude
        });
      }

      if ($window.localStorage.latitude && $window.localStorage.longitude) {
        resolveLocation();
      } else {
        geolocation.getLocation().then(function (data) {
          $window.localStorage.latitude = data.coords.latitude;
          $window.localStorage.longitude = data.coords.longitude;

          resolveLocation();
        });
      }

      return deferred.promise;
    }

    return {
      find: find
    };
  });
