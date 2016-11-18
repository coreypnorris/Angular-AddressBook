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
    var firstContact = data[0];
    expect(firstContact.id === 1).toBe(true);
    expect(firstContact.firstname === "Kaylyn").toBe(true);
    expect(firstContact.lastname === "Gentry").toBe(true);
    expect(firstContact.address1 === "47 2nd Lane").toBe(true);
    expect(firstContact.address2 === "").toBe(true);
    expect(firstContact.city === "Mountain View").toBe(true);
    expect(firstContact.state === "CA").toBe(true);
    expect(firstContact.postalcode === "94043").toBe(true);
    expect(firstContact.phone === "(405) 718-6173").toBe(true);
    expect(firstContact.email === "Treff1940@gustr.com").toBe(true);
    expect(firstContact.dateofbirth === "9/26/1976").toBe(true);
    expect(firstContact.image === "https://images.unsplash.com/photo-1415471659643-57043b686f87?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2576adcec53bb1ee41558ee540ac44b9").toBe(true);
    expect(firstContact.favorite === true).toBe(true);
  });

  it('should have a function that adds new contacts to the initial data', function () {
    var data = contacts.data();
    expect(data.length === 10).toBe(true);
    var newContactId = data.length + 1;
    var newContact = {
      id:newContactId,
      firstname:"John",
      lastname:"Smith"
    };
    contacts.add(newContact);
    data = contacts.data();
    expect(data.length === 11).toBe(true);
  });
});