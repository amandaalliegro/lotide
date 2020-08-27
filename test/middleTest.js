const eqArrays= require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => {
  it("returns '' for ['1']", () => {
    assert.strictEqual(middle([1]), '');
  });it("returns 2 for [1,2,3]",() => {
    assert.strictEqual(middle([1, 2, 3]), 2); 
  });
});

console.log(middle([1])) // => []
middle([1, 2, 3]) // => [2]

/* TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2]); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => should FAIL
assertArraysEqual(["1, 2, 3"], ["1, 2, 3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual([], []); // => should PASS
assertArraysEqual([""], [""]); // => should PASS
assertArraysEqual([undefined], [""]); // => should FAIL

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]*/