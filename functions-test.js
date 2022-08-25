// functions-test.js

var assert = require('chai').assert;
// creates the assert variable that requires chai library of functionality for the .assert
var addTwoNumbers = require('./functions.js').addTwoNumbers
// this is saying go into functions.js file and grab the key from the object module.exports named addTwoNumbers.
var sayHello = require('./functions.js').sayHello;
var buildCar = require('./functions.js').buildCar;

describe('functions', function() {
//mocha says you have to open a describe block an it blocks. The it block explains what the specific test is doing. What are we describing? function() { describe block that hold all of testing}
  describe('addTwoNumbers', function() {

    it('should be able to add zero to zero', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(0, 0)
//(0,0) are our arguments == at least two parameters need to be made num1 and num2
      // assert what the result SHOULD be
      assert.equal(result, 0)
      //0 in above line is what the return should yield.
      //result is the var result that is invoking the addTwoNumbers function and is putting in two arguments and running through the statements and should get the result of 0.
    })

    it('should be able to add 1 to 0', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(1, 0)

      // assert what the result SHOULD be
      assert.equal(result, 1)
    })

    it('should be able to add 1 to 1', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(1, 1)

      // assert what the result SHOULD be
      assert.equal(result, 2)
    })
  })

  describe('sayHello', function() {
    it('should be able to say hello to Leta', function() {
      // setup for test (if necessary)

      // execute function
      var result = sayHello('Leta')

      // assert what the result SHOULD be
      assert.equal(result, 'Hi there Leta!')
    })

    it.skip('should be able to say hello to Casey', function() {
      // setup for test (if necessary)

      // execute function
      var result = sayHello('Casey')

      // assert what the result SHOULD be
      assert.equal(result, 'Hi there Casey!')
    })

    it.skip('should not be able to say hello to Will', function() {
      // setup for test (if necessary)

      // execute function
      var result = sayHello('Will')

      // assert what the result SHOULD be
      assert.equal(result, 'No more testing Will!')
    })
  })

  describe('buildCar', function() {
    it.skip('should return a car with a color', function() {
      // setup for test (if necessary)
      var color = 'red'

      // execute function
      var result = buildCar(color)

      // assert what the result SHOULD be
  assert.equal(result.color, color)
  //result.color is var result with a property of color. It does not mean that the key is color. The key could be anything ie carColor: color,
    })

    it.skip('should return a car with a type', function() {
      // setup for test (if necessary)
      var color = 'red'
      var type = 'truck'

      // execute function
      var result = buildCar(color, type)

      // assert what the result SHOULD be
      assert.equal(result.type, type)
      //  assert.equal(result.type, 'truck')
      //The above two lines are the exact same.
      //.type means it needs to be an object.
    })

    it.skip('should return an empty object if there are no details passed', function() {
      // setup for test (if necessary)

      // execute function
      var result = buildCar()

      // assert what the result SHOULD be
      assert.deepEqual(result, {})
    })
  })
})
