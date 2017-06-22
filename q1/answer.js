var passThrough = require('../modules/passThrough');
var worker = require('../modules/reverseStringBy');

passThrough(
  worker,
  process.argv.slice(2).pop(),
  ' ',
  function (err, data) {
  	process.stdout.write((err || data) + '\n');
  }
);
