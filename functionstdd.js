const addOne = (numbers) => {
  const oneAdded = numbers.map((item) => {
    return item + 1;
  });
  return oneAdded;
};

const getWordLengths = (words) => words.map((word) => word.length);

const findNeedle = (words, searchWord) => {
  return words.indexOf(searchWord);
};

module.exports = { addOne, getWordLengths, findNeedle };
