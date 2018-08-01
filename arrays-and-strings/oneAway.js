/* There are three types of edits that can be performed on strings: insert a character, remove a
character, or replace a character. Given two strings, write a function to check if they are one
edit (or zero edits) away. */

const oneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let longerStr = str1;
  let shorterStr = str2;

  if (str1.length !== str2.length) {
    longerStr = str1.length > str2.length ? str1 : str2;
    shorterStr = str1.length > str2.length ? str2 : str1;
  }

  const holder = {};
  for (let i = 0; i < longerStr.length; i += 1) {
    if (!holder[longerStr[i]]) {
      holder[longerStr[i]] = 1;
    } else {
      holder[longerStr[i]] += 1;
    }
  }

  for (let j = 0; j < shorterStr.length; j += 1) {
    if (holder[shorterStr[j]]) {
      holder[shorterStr[j]] -= 1;
    }
  }

  const countArr = Object.values(holder);

  return countArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) === 1;
};

oneAway('pale', 'ple'); // true
oneAway('pales', 'pale'); // true
oneAway('pale', 'bale'); // true
oneAway('pale', 'bake'); // false
