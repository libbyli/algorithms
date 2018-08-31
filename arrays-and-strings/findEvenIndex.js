const findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let a = 0; a < i; a += 1) {
      leftSum += arr[a];
    }

    for (let b = i + 1; b < arr.length; b += 1) {
      rightSum += arr[b];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};
