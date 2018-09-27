const assert = require('assert');

const CodeWars = require('../lib/CodeWars');


describe('CodeWars JS Katas', () => {


    it('array_diff', () => {
        const codewars = new CodeWars();

        assert.deepEqual(codewars.array_diff([], [4, 5]), [], 'a was [], b was [4,5]');
        assert.deepEqual(codewars.array_diff([3, 4], [3]), [4], 'a was [3,4], b was [3]');
        assert.deepEqual(codewars.array_diff([1, 8, 2], []), [1, 8, 2], 'a was [1,8,2], b was []');
    });
}); 
