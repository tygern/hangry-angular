'use strict';

angular.module('hangryApp')
  .service('RestaurantService', function ($http, ENV) {
    var url = ENV.apiEndpoint + '/restaurants';

    function getList() {
      return $http.get(url)
    }

    return {
      getList: getList
    };
  });
