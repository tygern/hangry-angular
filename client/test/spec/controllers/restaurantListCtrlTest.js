'use strict';

describe('RestaurantListCtrl', function () {

  beforeEach(module('hangryApp'));

  var RestaurantListCtrl,
    $scope,
    RestaurantService,
    restaurantDeferred;

  beforeEach(inject(function ($controller, $rootScope, $q, _RestaurantService_) {
    $scope = $rootScope.$new();
    RestaurantService = _RestaurantService_;

    restaurantDeferred = $q.defer();
    spyOn(RestaurantService, 'getList').and.returnValue(restaurantDeferred.promise);

    RestaurantListCtrl = $controller('RestaurantListCtrl', {
      $scope: $scope,
      RestaurantService: RestaurantService
    });
  }));

  it('gets the list of restaurants', function () {
    restaurantDeferred.resolve({data: [{a: 'restaurant'}]});
    $scope.$apply();

    expect($scope.restaurants).toEqual([{a: 'restaurant'}]);
  });
});
