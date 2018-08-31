const findEven = (arr) => {
  return arr.filter(integer => integer % 2 === 0);
};

const findOdd = (arr) => {
  return arr.filter(integer => integer % 2 !== 0);
};

const findOutlier = (integers) => {
  for (let i = 0; i < integers.length; i += 1) {
    if (findEven(integers).length > 1) {
      return findOdd(integers)[0];
    }
    return findEven(integers)[0];
  }
};
