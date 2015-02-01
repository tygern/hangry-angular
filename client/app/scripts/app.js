'use strict';

angular
  .module('hangryApp', [
    'ngResource',
    'ngRoute',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/restaurants', {
        templateUrl: 'views/restaurantList.html',
        controller: 'RestaurantListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
