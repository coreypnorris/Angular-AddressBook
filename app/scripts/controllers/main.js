'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('MainCtrl', ['$scope', 'contacts', '$translate', 'cultures', '$cookies', function ($scope, contacts, $translate, cultures, $cookies) {
    var listOfCultures = cultures.data();
    $scope.cultures = listOfCultures;
    $scope.contacts = contacts.data();
    $scope.toggleFavorite = function(contact) {
      contact.favorite = contact.favorite === true ? false : true;
    };
    $scope.remove = function(contact) { 
      var index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
    };
    $scope.setCultureBasedOnCookie = function(){
      var cookieCultureId = $cookies.get("UICulture");
      var cookieCultureName = $.grep(listOfCultures, function(e){ return e.id === cookieCultureId; })[0].name;
      $translate.use(cookieCultureName);
    };
    $scope.saveCultureToCookie = function(cultureId){
      createCookie("UICulture",cultureId,7);
    };
    $scope.setCultureBasedOnCookie();
  }])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
