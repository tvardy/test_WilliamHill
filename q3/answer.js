var passThrough = require('../modules/passThrough');
var worker = require('../modules/monthsContaining');

passThrough(
  worker,
  process.argv.slice(2).pop(),
  ['Sun', 5],
  function (err, data) {
  	process.stdout.write((err || data) + '\n');
  }
);
