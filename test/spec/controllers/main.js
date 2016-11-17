'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('addressBookApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.contacts.length).toBe(10);
  });

  it('should have a function that toggles the favorite property on contacts to the scope', function () {
    var firstContact = scope.contacts[0];
    expect(firstContact.favorite).toBe(true);
    scope.toggleFavorite(firstContact);
    expect(firstContact.favorite).toBe(false);
  });
});
