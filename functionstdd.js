const addOne = (numbers) => {
  const oneAdded = numbers.map((item) => {
    return item + 1;
  });
  return oneAdded;
};

const getWordLengths = (words) => words.map((word) => word.length);

const checkValue = (a) => {
  return a == "needle";
};

const findNeedle = (a) => {
  return a.findIndex(checkValue);
};

module.exports = { addOne, getWordLengths, findNeedle };
