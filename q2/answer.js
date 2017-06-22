var passThrough = require('../modules/passThrough');
var worker = require('../modules/ukCoins');

passThrough(
  worker,
  process.argv.slice(2).pop(),
  undefined,
  function (err, data) {
  	process.stdout.write((err || data) + '\n');
  }
);
