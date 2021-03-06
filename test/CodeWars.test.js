const assert = require('assert');

const CodeWars = require('../lib/CodeWars');
const { zero, one, two, three, four, five, six, seven, eight, nine,
  plus, minus, times, dividedBy } = require('../lib/calculating-with-functions');


describe('array_diff', () => {

  const codewars = new CodeWars();
    
  it('sample tests', () => {
        
    assert.deepEqual(codewars.array_diff([], [4, 5]), [], 'a was [], b was [4,5]');
    assert.deepEqual(codewars.array_diff([3, 4], [3]), [4], 'a was [3,4], b was [3]');
    assert.deepEqual(codewars.array_diff([1, 8, 2], []), [1, 8, 2], 'a was [1,8,2], b was []');
  });
    
}); 

describe('Rot13', () => {
  const codewars = new CodeWars();

  it('test', () => {
    assert.equal(codewars.rot13('test'), 'grfg');
  });

  it('Test', () => {
    assert.equal(codewars.rot13('Test'), 'Grfg');
  });
});

describe('calculating with functions', () => {

  it('passes the sample tests', () => {

    assert.equal(seven(times(five())), 35);
    assert.equal(four(plus(nine())), 13);
    assert.equal(eight(minus(three())), 5);
    assert.equal(six(dividedBy(two())), 3);
  });


});




