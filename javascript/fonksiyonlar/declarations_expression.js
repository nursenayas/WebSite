console.log('**************** DECLARATİONS EXPRESSİON ***************');

// function declarations
/*
function sum(a, b) {
  var c = a + b;
  return c;
}
console.log(sum(5,6));
*/

//function Expressions
/*
const sum = function (a, b) {

  if (typeof a === "undefined") {
    a = 0;
  }
  if (typeof b === "undefined") {
    b = 0;
  }

  var c = a + b;
  return c;
};
*/

//ES6 Default Parameters
const sum = function (a = 0, b = 0) {
  var c = a + b;
  return c;
};

function sumAll() {
  var total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(5, 6));
console.log(sum(5)); //NaN
console.log(sum(5, 6, 10, 50));
console.log(sumAll(5, 6, 10, 50));
