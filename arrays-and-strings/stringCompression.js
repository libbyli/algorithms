/* Implement a method to perform basic string compression using the counts of repeated characters.
For exmaple, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not
become smaller than the original string, your method should return the original string. You can
assume the string only has uppercase and lowercase letters (a-z). */

const compressString = (str) => {
  const result = [];
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[i + 1]) {
      result.push(str[i]);
      result.push(count);
      count = 1;
    } else {
      count += 1;
    }
  }

  const compressedStr = result.join('');

  return compressedStr.length < str.length ? compressedStr : str;
};

compressString('aabcccccaaa'); // 'a2b1c5a3'
compressString('abc'); // 'abc'