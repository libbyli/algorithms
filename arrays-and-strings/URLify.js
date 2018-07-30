/* Write a method to replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the additional characters,
and that you are given the "true" length of the string. */

const urlify = (string, length) => {
  const trueString = string.substring(0, length);
  const strArr = trueString.split(' ');
  return strArr.join('%20');
};

urlify('Mr John Smith   ', 13); // 'Mr%20John%20Smith';