const add = function(x, y) {
  // calculate sum of x and y
	return x + y;
};

const subtract = function(x, y) {
  // calculate difference of x and y
	return x - y;
};

// get sum of an array of numbers
const sum = function(arr) {

  // create sum variable
	let total = 0;

  // loop through array to add each index to sum
  for (let item of arr) {
    total += item;
  }
  return total;
};

// get the total of the indices in an array multiplied together
const multiply = function(arr) {

  // create initial total value
  let total = 1;

  // loop through and multiply each index by the total
  for (let item of arr) {
    total *= item;
  }
  return total;
};

// calculate one number raised to another
const power = function(base, exp) {
	return base ** exp;
};

// find the factorial of a number
const factorial = function(num) {

  // create initial total value
	let total = 1;

  // multiply all numbers between 1 and num
  if (num > 1) {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
  } else {
    return total;
  }
  return total;
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
