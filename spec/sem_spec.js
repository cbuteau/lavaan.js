
var baseR = require('../baseR/index.js');

var Parser = require('../model/parser');

var lavaan = require('..');

var data;
var parser;

describe('SEM tutorial steps', function() {
  it ('Load RDA', function() {
    // this dataset contains 75 rows with columns of y1-y8 and x1-x3
    data = baseR.load('./data/PoliticalDemocracy.rda');
  });

  it ('Load MODEL', function() {
    parser = new Parser('./testmodels/sem_tutorial.model');
    //data = baseR.load('./data/PoliticalDemocracy.rda');
  });

  it ('Run sem', function() {
    lavaan.sem(parser, data);
  });
});
