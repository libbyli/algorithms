/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

const findShort = (s) => {
  const strArr = s.split(' ');
  let shortestLength = strArr[0].length;
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i].length < shortestLength) {
      shortestLength = strArr[i].length;
    }
  }
  return shortestLength;
};

findShort("bitcoin take over the world maybe who knows perhaps"); // 3
