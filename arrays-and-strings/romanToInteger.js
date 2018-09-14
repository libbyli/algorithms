/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  
  let result = 0;
  let next;
  
  for (let i = s.length - 1; i >= 0; i -= 1) {
    next = s[i + 1];
    if ( (s[i] === 'I' && (next === 'V' || next === 'X')) || 
        s[i] === 'X' && (next === 'L' || next === 'C') || 
        s[i] === 'C' && (next === 'D' || next === 'M') )
        {
          result += -(romanNumerals[s[i]]);
        } else {
          result += romanNumerals[s[i]];
        }
  }
  return result;
};
