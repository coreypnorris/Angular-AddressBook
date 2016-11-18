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
    
    var newContactId = $scope.contacts.length + 1;
    $scope.newcontact = {
      id: newContactId,
      firstname:"John",
      lastname:"Smith"
    };

    $scope.save = function(newContact) {
      contacts.add(newContact); 
      $location.path( "/");
    }; 
  }]);
