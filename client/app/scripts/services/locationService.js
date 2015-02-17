'use strict';

angular.module('hangryApp')
  .service('LocationService', function ($window, $q, geolocation) {
    function find() {
      var deferred = $q.defer();

      geolocation.getLocation().then(function (data) {
        deferred.resolve({
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        });
      }, function(error){
        deferred.reject(error);
      });

      return deferred.promise;
    }

    return {
      find: find
    };
  });
