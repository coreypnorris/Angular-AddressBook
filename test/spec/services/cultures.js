'use strict';

describe('Service: cultures', function () {

  // load the service's module
  beforeEach(module('addressBookApp'));

  // instantiate service
  var cultures;
  beforeEach(inject(function (_cultures_) {
    cultures = _cultures_;
  }));

  it('should do something', function () {
    expect(!!cultures).toBe(true);
  });

});
