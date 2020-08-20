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

const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!(sentence[i] === " ")) {
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
    }
  }
  return results;
};



/// TEST CODE
console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").h, [0]); // => should PASS
assertArraysEqual(letterPositions("hello").e, [1]); // => should PASS
assertArraysEqual(letterPositions("hello").l, [2, 3]); // => should PASS
assertArraysEqual(letterPositions("hello").o, [4]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").e, [4, 14]); // => should FAIL