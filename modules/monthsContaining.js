var moment = require('moment');

var _days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novembe', 'December'];

var _getIndex = function (arr, name) { return arr.indexOf(name); };

var _dayNumber = function (name) { return _getIndex(_days, name); };

var _monthNumber = function (name) { return _getIndex(_months, name); };

var _weekDayCount = function (days, month) {
  // based on http://stackoverflow.com/revisions/25672779/2
  var ndays = month.daysInMonth();
  var d0 = month.toDate().getDay();

  return days.reduce(function (a, b) {
    return a + Math.floor( ( ndays + (d0 + 6 - b) % 7 ) / 7 );
  }, 0);
};

module.exports = function (line, args) {
  var months = [];
  var weekDays = [];
  var weekDay = args[0];
  var dayCountNeeded = args[1];

  line = line.split(' ');

  var start = moment([line[1], _monthNumber(line[0])]);
  var end = moment([line[3], _monthNumber(line[2])]);

  while (!start.isAfter(end)) {
    months.push(moment(start));
    start.add(1, 'M');
  }

  weekDays = months.map(function (month) {
    return _weekDayCount([_dayNumber(weekDay)], month);
  });

  return weekDays.reduce(function (sum, current) {
    return current === dayCountNeeded ? ++sum : sum;
  }, 0);
};
