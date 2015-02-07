'use strict';

describe('RestaurantListCtrl', function () {

  beforeEach(module('hangryApp'));

  var RestaurantListCtrl,
    $scope,
    RestaurantService,
    restaurantDeferred,
    LocationService,
    locationDeferred;

  beforeEach(inject(function ($controller, $rootScope, $q, _RestaurantService_, _LocationService_) {
    $scope = $rootScope.$new();
    RestaurantService = _RestaurantService_;
    LocationService = _LocationService_;

    restaurantDeferred = $q.defer();
    spyOn(RestaurantService, 'getList').and.returnValue(restaurantDeferred.promise);

    locationDeferred = $q.defer();
    spyOn(LocationService, 'find').and.returnValue(locationDeferred.promise);

    RestaurantListCtrl = $controller('RestaurantListCtrl', {
      $scope: $scope,
      RestaurantService: RestaurantService
    });
  }));

  it('gets the list of restaurants after finding the loation', function () {
    locationDeferred.resolve({
      latitude: '123',
      longitude: '321'
    });
    restaurantDeferred.resolve([{a: 'restaurant'}]);
    $scope.$apply();

    expect($scope.restaurants).toEqual([{a: 'restaurant'}]);

    expect(RestaurantService.getList).toHaveBeenCalledWith({
      latitude: '123',
      longitude: '321'
    });
  });
});
