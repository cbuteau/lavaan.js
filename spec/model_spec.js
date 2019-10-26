
var lavaan = require('..');

describe('Basic test', function() {
  it ('cfa', function() {
    expect(lavaan.cfa()).toBe(undefined);
  });
});
