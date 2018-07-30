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
