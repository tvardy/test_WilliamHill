var _pairs = function (min, max) {
	var i, j;
	var pairs = [];

	for (i = min; i <= max; i++) {
		for (j = min; j <= max; j++) {
			pairs.push([i, j]);
		}
	}

	return pairs;
};

var _power = function (arr) {
	return Math.pow(arr[0], arr[1]);
};

var _unique = function (arr) {
	return arr.reduce(function (result, current) {
		if (result.indexOf(current) === -1) {
			result.push(current);
		}

		return result;
	}, []);
};

var _sortNumeric = function (arr) {
	return arr.sort(function (a, b) { return a - b; });
};


module.exports = function (input, pattern) {
	var x, y;

  input = input.split(pattern).sort();

  x = parseInt(input[0]);
  y = parseInt(input[1]);

  return _sortNumeric(
  	_unique(
			_pairs(x, y).map(_power)
		)
	).length;
};
