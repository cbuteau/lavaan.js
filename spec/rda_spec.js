
var baseR = require('../baseR/index.js');

var data;
describe('SEM tutorial steps', function() {
  it ('Load RDA', function() {
    // this dataset contains 75 rows with columns of y1-y8 and x1-x3
    data = baseR.load('./data/PoliticalDemocracy.rda');
  });

  it ('Load RDA', function() {
    // this dataset contains 75 rows with columns of y1-y8 and x1-x3
    data = baseR.load('./data/Demo.growth.rda');
  });

  it ('Load RDA', function() {
    // this dataset contains 75 rows with columns of y1-y8 and x1-x3
    data = baseR.load('./data/Demo.twolevel.RData');
  });

  it ('Load RDA', function() {
    // this dataset contains 75 rows with columns of y1-y8 and x1-x3
    data = baseR.load('./data/HolzingerSwineford1939.rda');
  });


});
