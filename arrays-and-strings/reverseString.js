/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  const sArray = s.split('');
  return sArray.reverse().join('');
};

reverseString('hello'); // 'olleh'
