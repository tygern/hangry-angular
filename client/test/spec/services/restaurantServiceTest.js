'use strict';

describe('RestaurantService', function () {

  beforeEach(module('hangryApp'));

  var RestaurantService,
    $httpBackend,
    ENV,
    $scope;

  beforeEach((inject(function (_$httpBackend_, _RestaurantService_, _ENV_, $rootScope) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    RestaurantService = _RestaurantService_;
    ENV = _ENV_;
  })));

  describe('getList', function () {
    it('gets the restaurants', function (done) {
      $httpBackend.expectGET(ENV.apiEndpoint + '/restaurants?latitude=123&longitude=321').respond([{a: 'restaurant'}]);

      RestaurantService.getList({
        latitude: '123',
        longitude: '321'
      }).then(function (result) {
        expect(result).toEqual([{a: 'restaurant'}]);
        done();
      });

      $httpBackend.flush();
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
