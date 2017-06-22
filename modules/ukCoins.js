/**
 * Don't re-invent the wheel! ;)
 * [http://www.codewars.com/kata/counting-change-combinations/solutions/javascript?show-solutions=1]
 */

var coins = [
  200,
  100,
  50,
  20,
  10,
  5,
  2,
  1,
];

var _count = function (sum, items) {
  if (sum < 0 || items.length === 0)
    return 0;
  else if (sum === 0)
    return 1;
  else
    return _count(sum - items[0], items) + _count(sum, items.slice(1));
};

module.exports = function (value) {
  if (!value) {
    return '';
  } else {
    value = parseInt(value.replace(/p$/, ''));
    return _count(value, coins);
  }
};
