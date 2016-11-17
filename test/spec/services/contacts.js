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

  it('should have return contacts with certain properties', function () {
    var data = contacts.data();
    for (var i = 0; i < data.length; i++) {
      var contact = data[i];
      expect(contact.id >= 1).toBe(true);
      expect(contact.name.length > 1).toBe(true);
      expect(contact.address1.length > 1).toBe(true);
      expect(contact.address2.length > 1).toBe(true);
      expect(contact.phone.length > 1).toBe(true);
      expect(contact.image.length > 1).toBe(true);  
      expect(typeof(contact.favorite) === "boolean").toBe(true);
    }
  });
});
