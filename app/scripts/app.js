'use strict';

/**
 * @ngdoc overview
 * @name addressBookApp
 * @description
 * # addressBookApp
 *
 * Main module of the application.
 */
angular
  .module('addressBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
