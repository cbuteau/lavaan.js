
var fs = require('fs');

var common = require('../lib/common');

function Parser(fileName) {
  this.fileName = fileName;
  this._data = {
    vars: [],
    subvars: []
  };
  this._load();
}

Parser.prototype = {
  _load: function() {
    var data = fs.readFileSync(this.fileName, 'utf8');
    var lines = data.split('\n');

    var that = this;
    common.iterate(lines, function(line) {
      if (common.contains(line, '=~')) {
        var parts = line.split('=~');
        var varname = parts[0].trim();
        var expression = parts[1].trim();
        common.appendUnique(that._data.vars, varname);
      }
    });
  }
}

module.exports = Parser;
