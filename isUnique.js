// Implement an algorithm to determine if a string has all unique characters.
const isUnique = (string) => {
  const characters = {};
  for (let i = 0; i < string.length; i += 1) {
    if (!characters[string[i]]) {
      characters[string[i]] = true;
    } else {
      return false;
    }
  }
  return true;
};

isUnique('hello'); // false
isUnique('abcd'); // true
isUnique('h'); // true
isUnique(''); // true


// What if you cannot use additional data structures?
const isUnique2 = (string) => {
  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 1; j < string.length; j += 1) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};
