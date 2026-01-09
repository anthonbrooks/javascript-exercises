const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let total = 0;
  for (let item of arr) {
    total += item;
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let item of arr) {
    total *= item;
  }
  return total;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
