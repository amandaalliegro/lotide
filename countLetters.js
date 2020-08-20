const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`))

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countLetters = function(sentence){
  let ltts = sentence.length; 
    // how do i create an object with the cats and dogs
    const output = {};
    // figure out how am i going to loop through a string of words? X
    for (let char of sentence.split(" ").join("")) {
      output[char] ? output[char]++ : output[char] = 1;
    }
    return console.log(output);
  };


/// TEST CODE
countLetters("lighthouse in the house")