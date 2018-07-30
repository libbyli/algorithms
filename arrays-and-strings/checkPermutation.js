// Given two strings, write a method to decide if one is a permutation of the other.
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

checkPermutation('abc', 'bca'); // true
checkPermutation('abc', 'dbc'); // false