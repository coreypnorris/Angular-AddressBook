'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('MainCtrl', ['$scope', 'contacts', function ($scope, contacts) {
    $scope.contacts = contacts.data();
    $scope.toggleFavorite = function(contact) {
      contact.favorite = contact.favorite === true ? false : true;
    };
    $scope.remove = function(contact) { 
      var index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
    };
  }])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
