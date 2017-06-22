var passThrough = require('../modules/passThrough');
var worker = require('../modules/distinctValues');

passThrough(
  worker,
  process.argv.slice(2).pop(),
  ' ',
  function (err, data) {
  	process.stdout.write((err || data) + '\n');
  }
);
