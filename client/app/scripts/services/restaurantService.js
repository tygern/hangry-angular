'use strict';

angular.module('hangryApp')
  .service('RestaurantService', function ($http, $q, ENV) {
    var url = ENV.apiEndpoint + '/restaurants';

    function getList(params) {
      var deferred = $q.defer();

      $http({
        url: url,
        method: 'GET',
        params: params
      }).success(function (data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    }

    return {
      getList: getList
    };
  });
