'use strict';

describe('Service: contacts', function () {

  // load the service's module
  beforeEach(module('addressBookApp'));

  // instantiate service
  var contacts;
  beforeEach(inject(function (_contacts_) {
    contacts = _contacts_;
  }));

  it('should have a data property that returns a list of 10 contacts', function () {
    var data = contacts.data();
    expect(data.length === 10).toBe(true);
  });

});
