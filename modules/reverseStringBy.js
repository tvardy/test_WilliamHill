module.exports = function (str, pattern) {
  return str.split(pattern).reverse().join(pattern);
};
