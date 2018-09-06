const firstNotRepeatingCharacter = (s) => {
  let holder = {};
  for (let i = 0; i < s.length; i += 1) {
    if (!holder[s[i]]) {
      holder[s[i]] = 1;
    } else {
      holder[s[i]] += 1;
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    if (holder[s[i]] === 1) {
      return s[i];
    }
  }

  return '_';
};
