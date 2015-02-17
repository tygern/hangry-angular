'use strict';

describe('LocationService', function () {

  beforeEach(module('hangryApp'));

  var LocationService,
    $q,
    $window,
    $scope,
    geolocation;

  beforeEach((inject(function (_$httpBackend_, _LocationService_, _geolocation_, _$q_, $rootScope, _$window_) {
    LocationService = _LocationService_;
    geolocation = _geolocation_;
    $q = _$q_;
    $window = _$window_;
    $scope = $rootScope.$new();
  })));

  describe('find', function () {
    it('gets current location', function (done) {
      delete $window.localStorage.latitude;
      delete $window.localStorage.longitude;
      var locationDeferred = $q.defer();
      spyOn(geolocation, 'getLocation').and.returnValue(locationDeferred.promise);

      LocationService.find().then(function (location) {
        expect(location).toEqual({
          latitude: '123.23',
          longitude: '124.23'
        });

        done();
      });

      locationDeferred.resolve({
        coords: {
          latitude: '123.23',
          longitude: '124.23'
        }
      });
      $scope.$apply();
    });
  });
});
