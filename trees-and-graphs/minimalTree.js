/* Given a sorted (increasing order) array with unique integer elements, write an algorithm
to create a binary search tree with minimal height. */

const createMinimalTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  const result = [];

  let createTree = (arr) => {
    if (arr.length === 0) {
      return;
    }
    let midpoint = Math.floor(arr.length / 2);
    result.push(arr[midpoint]);
    const leftArr = arr.slice(0, midpoint);
    const rightArr = arr.slice(midpoint + 1, arr.length);

    createTree(leftArr);
    createTree(rightArr);
  };

  createTree(arr);
  return result;
};

createMinimalTree([1, 2, 3, 4, 5, 6, 7]); // [4, 2, 6, 1, 3, 5, 7];