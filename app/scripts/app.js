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
    'ngMaterial',
    'ngMdIcons'
  ])
  .config(function ($routeProvider, $mdAriaProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/NewContact', {
        templateUrl: 'views/newcontact.html',
        controller: 'NewcontactCtrl',
        controllerAs: 'NewContact'
      })
      .otherwise({
        redirectTo: '/'
      });
      $mdAriaProvider.disableWarnings();
  });