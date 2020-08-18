const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else (console.log(`Assertion Failed: ${actual} !== ${expected}`));

};
// FUNCTION IMPLEMENTATION
const tail = array => array.slice(1);

// TEST CODE
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail([5, 6, 7]), [7, 6]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);