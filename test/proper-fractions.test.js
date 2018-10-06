const assert = require('assert');

const ProperFractions = require('../lib/proper-fractions');

describe('it reports the number of propert fractions', () => {

  const properFractions = new ProperFractions();

  it('sample tests', () => {
    assert.equal(properFractions.properFractions(1), 0);
    assert.equal(properFractions.properFractions(2), 1);
    assert.equal(properFractions.properFractions(5), 4);
    assert.equal(properFractions.properFractions(15), 8);
    assert.equal(properFractions.properFractions(25), 20);
  });
});
