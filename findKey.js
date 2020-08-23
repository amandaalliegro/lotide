// ASSERT EQUAL COPY

const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`))
}
// EQ ARRAYS COPY

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

// ASSERT ARRAY EQUAL COPY

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    // console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    console.log("Assertion Passed:", actual, "===", expected);
  } else {
    // console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    console.log(" Assertion Failed:", actual, "!==", expected);
  }
};

/* Implement the function findKey which takes in an object and a callback. 
It should scan the object and return the first key for which the callback returns a truthy value. 
If no key is found, then it should return undefined. */

const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return console.log(key);
    }
  }
};
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
  
}, x => x.stars === 2) // => "noma"
