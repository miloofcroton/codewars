const assert = require('assert');

const CodeWars = require('../lib/CodeWars');


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

describe('Number of Proper Fractions with Denominator d', () => {

  const codewars = new CodeWars();

  it('sample test', () => {
    assert.equal(codewars.properFractions(1), 0);
  });
  it('sample test', () => {
    assert.equal(codewars.properFractions(2), 1);
  });
  it('sample test', () => {
    assert.equal(codewars.properFractions(5), 4);
  });
  it('sample test', () => {
    assert.equal(codewars.properFractions(15), 8);
  });
  it('sample test', () => {
    assert.equal(codewars.properFractions(25), 20);
  });
});



