var fs = require('fs');
var path = require('path');

module.exports = function (what, where, how, cb) {
  if (where) {
    var fileName = path.join(__dirname, '/../', where);

    fs.readFile(fileName, 'utf8', function (err, input) {
      if (err) {
        cb(err);
      } else {
        input.split('\n').forEach(function (line) {
          cb(null, line.length > 0 ? what(line, how) : '');
        });
      }
    });
  } else {
    cb('Please, pass the input file as a parameter...');
  }
};
