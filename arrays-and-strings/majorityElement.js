/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let holder = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (!holder[nums[i]]) {
      holder[nums[i]] = 1;
    } else {
      holder[nums[i]] += 1;
    }
  }

  let elements = Object.keys(holder);
  for (let i = 0; i < elements.length; i += 1) {
    if (holder[elements[i]] > nums.length / 2) {
      return parseInt(elements[i]);
    }
  }
};