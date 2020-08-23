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

/*Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.*/
const words = ["ground", "control", "to", "major", "tom"];

/*const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}*/
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

/*const results1 = words.map(word => word[0]);
console.log(results1);*/
const results1 = map(words, word => word[0]);
console.log(results1);


  // empty for now :)

  
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); // => should PASS
assertArraysEqual(map(words, word => word + " " + word), ['ground ground', 'control control', 'to to', 'major major', 'tom tom']); // => should PASS
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]); // => should PASS

