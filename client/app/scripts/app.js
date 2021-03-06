"use strict";

angular
  .module("hangryApp", [
    "ngMaterial",
    "ngResource",
    "ui.router",
    "geolocation",
    "config"
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/restaurants");

    $stateProvider
      .state("restaurants", {
        url: "/restaurants",
        templateUrl: "views/restaurantList.html",
        controller: "RestaurantListCtrl"
      });
  }
);
