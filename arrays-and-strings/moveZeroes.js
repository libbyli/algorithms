/**
  Given an array nums, write a function to move all 0's to the end of it
  while maintaining the relative order of the non-zero elements.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let indexes = [];
  let zeroes = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      if (indexes.length === 0) {
        indexes.push(i);
      } else {
        indexes.push(i - indexes.length);
      }
      zeroes.push(0);
    }
  }
  indexes.forEach(index => nums.splice(index, 1));
  nums.push(...zeroes);
};
