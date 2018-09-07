/* Given an array of integers, find the pair of adjacent elements that has the largest product and
return that product. */

function adjacentElementsProduct(inputArray) {
  let product = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] * inputArray[i + 1] > product) {
      product = inputArray[i] * inputArray[i + 1];
    }
  }
  return product;
}
