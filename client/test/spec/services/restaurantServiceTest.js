'use strict';

describe('RestaurantService', function () {

  beforeEach(module('hangryApp'));

  var RestaurantService,
    $httpBackend,
    ENV;

  beforeEach((inject(function (_$httpBackend_, _RestaurantService_, _ENV_) {
    $httpBackend = _$httpBackend_;
    RestaurantService = _RestaurantService_;
    ENV = _ENV_;
  })));

  describe('getList', function () {
    it('gets the restaurants', function () {
      $httpBackend.expectGET(ENV.apiEndpoint + '/restaurants').respond('200', {data: [{a: 'restaurant'}]});

      RestaurantService.getList();
    })
  });
});
