// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function sayHello(name) {
  return 'Hi there' + ' ' + name + '!';
}

//Below object module.exports exports the named functions in the object to the functions-test.js. This should be the last thing in your file. The functions that you create shold be above this.
module.exports = {
    addTwoNumbers, // see line 6 in functions-test.js
    sayHello,
    // buildCar
}
