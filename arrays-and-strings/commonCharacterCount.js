// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  let s1Holder = {};
  let s2Holder = {};
  let count = 0;

  for (let i = 0; i < s1.length; i += 1) {
    if (!s1Holder[s1[i]]) {
      s1Holder[s1[i]] = 1;
    } else {
      s1Holder[s1[i]] += 1;
    }
  }

  for (let i = 0; i < s2.length; i += 1) {
    if (!s2Holder[s2[i]]) {
      s2Holder[s2[i]] = 1;
    } else {
      s2Holder[s2[i]] += 1;
    }
  }

  let s1Characters = Object.keys(s1Holder);
  for (let i = 0; i < s1Characters.length; i += 1) {
    if (s2Holder[s1Characters[i]]) {
      count += Math.min(s1Holder[s1Characters[i]], s2Holder[s1Characters[i]]);
    }
  }

  return count;
}
