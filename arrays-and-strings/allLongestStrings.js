/* Given an array of strings, return another array containing all of its longest strings. */

function allLongestStrings(inputArray) {
  const sortedArr = inputArray.sort((a, b) => a.length - b.length);
  const longest = sortedArr[sortedArr.length - 1].length;
  const result = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i].length === longest) {
      result.push(inputArray[i]);
    }
  }

  return result;
}
