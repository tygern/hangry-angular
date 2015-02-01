'use strict';

describe('RestaurantListCtrl', function () {

  beforeEach(module('hangryApp'));

  var RestaurantListCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestaurantListCtrl = $controller('RestaurantListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
