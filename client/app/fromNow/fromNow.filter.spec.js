'use strict';

describe('Filter: fromNow', function () {

  // load the filter's module
  beforeEach(module('meanApp'));

  // initialize a new instance of the filter before each test
  var fromNow;
  beforeEach(inject(function ($filter) {
    fromNow = $filter('fromNow');
  }));

  // it('should return the input prefixed with "fromNow filter:"', function () {
  //   var text = 'angularjs';
  // });
  it('return "a few seconds ago" for now', function () {
    expect(fromNow(Date.now())).toBe('a few seconds ago');
  });

});
