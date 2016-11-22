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
    'ngMdIcons',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider, $mdAriaProvider, $translateProvider) {
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
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.useStaticFilesLoader({
        prefix: 'scripts/strings/strings-',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en-US');
  });