const assertEqual = require('../assertEqual');

const tail = require('../tail');

// TEST CODE
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail([5, 6, 7]), [7, 6]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);