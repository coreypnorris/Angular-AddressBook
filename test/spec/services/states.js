'use strict';

describe('Service: states', function () {

  // load the service's module
  beforeEach(module('addressBookApp'));

  // instantiate service
  var states;
  beforeEach(inject(function (_states_) {
    states = _states_;
  }));

  it('should have an array of 59 US states', function () {
    expect(states.data().length).toBe(59);
  });

  it('each state should have a name and abbreviation properties', function () {
    var firstState = states.data()[0];
    expect(firstState.name === "Alabama").toBe(true);
    expect(firstState.abbreviation === "AL").toBe(true);
  });
});
