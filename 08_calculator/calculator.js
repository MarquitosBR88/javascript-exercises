const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, item) => {
    return total + item
  }, 0);   
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1
  } else {
    for (i = num - 1; i >= 1; i--) {
      num = num * i
    }
    return num
  }
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
