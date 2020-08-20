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