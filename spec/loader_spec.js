
var Parser = require('../model/parser');

describe('Loader...', function() {
  it ('Parse', function() {
    var parser = new Parser('./testmodels/cfa_tutorial.model');
  });

  it ('Parse', function() {
    var parser = new Parser('./testmodels/sem_tutorial.model');
  });

});
