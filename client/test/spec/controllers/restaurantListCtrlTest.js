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

  it('gets the list of restaurants after finding the location', function () {
    locationDeferred.resolve({
      latitude: '123',
      longitude: '321'
    });
    restaurantDeferred.resolve([{a: 'restaurant'}]);
    $scope.$apply();

    expect($scope.restaurants).toEqual([{a: 'restaurant'}]);

    expect(RestaurantService.getList).toHaveBeenCalledWith({
      latitude: '123',
      longitude: '321',
      'tags[]': []
    });
  });

  it('watches the list of tags and gets restaurants if they change', function () {
    locationDeferred.resolve({
      latitude: '123',
      longitude: '321'
    });
    $scope.$apply();

    $scope.restaurants = [];
    RestaurantService.getList.calls.reset();

    $scope.newTag = 'pickles';
    $scope.addTag();

    restaurantDeferred.resolve([{a: 'restaurant'}]);
    $scope.$apply();

    expect(RestaurantService.getList).toHaveBeenCalledWith({
      latitude: '123',
      longitude: '321',
      'tags[]': ['pickles']
    });
    expect($scope.restaurants).toEqual([{a: 'restaurant'}]);
  });

  describe('addTag', function () {
    it('adds a tag to tags and removes newTag', function () {
      $scope.newTag = 'pickles';

      $scope.addTag();

      expect($scope.tags).toEqual(['pickles']);
      expect($scope.newTag).toEqual(undefined);

      $scope.newTag = 'mustard';

      $scope.addTag();

      expect($scope.tags).toEqual(['pickles', 'mustard']);
    });

    it('does not allow repeat tags', function () {
      $scope.newTag = 'pickles';

      $scope.addTag();

      expect($scope.tags).toEqual(['pickles']);

      $scope.newTag = 'pickles';

      $scope.addTag();

      expect($scope.tags).toEqual(['pickles']);
    });
  });

  describe('removeTag', function () {
    it('removes the tag with matching text', function () {
      $scope.tags = ['mustard', 'pickles'];

      $scope.removeTag('mustard');

      expect($scope.tags).toEqual(['pickles']);

      $scope.removeTag('potato');

      expect($scope.tags).toEqual(['pickles']);
    })
  })
});
