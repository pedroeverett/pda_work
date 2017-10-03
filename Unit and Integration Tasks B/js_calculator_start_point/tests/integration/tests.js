var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  
  it('should change the display while the buttons are used', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#number2')).click();
   element(by.css('#number3')).click();
   element(by.css('#number4')).click();
   element(by.css('#number5')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('12345')
 })

  it('should update the display while using operation buttons', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number5')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('100')
 })

  it('should work with multiple operation buttons', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number3')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('9')
 })

  it('should work with large numbers', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number9')).click();
   element(by.css('#number9')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number9')).click();
   element(by.css('#number9')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('98901')
 })

  it('should work with floats', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
 })

  it('should work with negative numbers', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('-1')
 })

  it('should work with dividing by zero', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
 })

});