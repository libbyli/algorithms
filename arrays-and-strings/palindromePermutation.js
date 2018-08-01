/* Given a string, write a function to check if it is a permutation of a palindrome. A palindrome
is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of
letters. The palindrome does not need to be limited to just dictionary words. */

const isPalindromePermutation = (str) => {
  if (str.length === 0) {
    return true;
  }

  const holder = {};
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i += 1) {
    if (str[i] !== ' ') {
      if (!holder[lowerStr[i]]) {
        holder[lowerStr[i]] = 1
      } else {
        holder[lowerStr[i]] += 1;
      }
    }
  }

  const letterCount = Object.values(holder);
  letterCount.sort((a, b) => a - b);

  for (let j = 1; j < letterCount.length; j += 1) {
    if (letterCount[j] % 2 !== 0) {
      return false;
    }
  }

  return true;
};

isPalindromePermutation('Tact Coa'); // true
isPalindromePermutation('a'); // true
isPalindromePermutation('abc'); // false