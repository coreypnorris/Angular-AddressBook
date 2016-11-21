'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:NewcontactCtrl
 * @description
 * # NewcontactCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('NewcontactCtrl', ['$scope', '$location', 'contacts', 'states', function ($scope, $location, contacts, states) {
    $scope.states = states.data();
    $scope.contacts = contacts.data();
    
    $scope.newcontact = {};

    $scope.save = function(newContact) {
      contacts.save(newContact); 
      $location.path( "/");
    }; 
  }]);
