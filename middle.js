const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`))

};

const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    // console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    console.log("Assertion Passed:", actual, "===", expected);
  } else {
    // console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    console.log(" Assertion Failed:", actual, "!==", expected);
  }
};
const middle = array => {
  const output = [];
  if (array.length >= 3 && array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
  } else if (array.length >= 3) {
    output.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return output;
};



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
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]