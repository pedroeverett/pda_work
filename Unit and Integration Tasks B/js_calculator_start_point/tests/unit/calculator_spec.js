var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should register a number has been clicked', function() {
    calculator.numberClick(5);
    assert.equal(5, calculator.runningTotal);
  }),

  it('it should register an operator button has been clicked', function() {
    calculator.operatorClick('+');
    assert.equal('+', calculator.previousOperator);
  }),

  it('it should should clear the screen', function() {
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  }),

  it('it should add two numbers together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  }),

  it('it should subtract a number from a given value', function() {
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(1, calculator.runningTotal);
  }),

  it('it should multiply two numbers together', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(6, calculator.runningTotal);
  }), 

  it('it should divide a number from a given value', function() {
    calculator.numberClick(6);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  })

});
