const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`))

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countLetters = function(sentence){
 
    const output = {};
    // figure out how am i going to loop through a string of words? X
    for (let char of sentence.split(" ").join("")) {
      output[char] ? output[char]++ : output[char] = 1;
    }
    return console.log(output);
  };


/// TEST CODE
countLetters("lighthouse in the house")