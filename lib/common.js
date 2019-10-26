
function iterate(array, callback) {
  var len = array.length;
  for (var i = 0; i < len; i++) {
    var current = array[i];
    callback(current, i, array);
  }
}

function contains(stringToTest, snippet) {
  return stringToTest.indexOf(snippet) !== -1;
}

function appendUnique(array, item) {
  if (array.indexOf(item) === -1) {
    array.push(item);
  }
}

module.exports = {
  iterate: iterate,
  contains: contains,
  appendUnique: appendUnique
};
