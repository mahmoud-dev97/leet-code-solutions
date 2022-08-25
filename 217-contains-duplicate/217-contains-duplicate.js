/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return [...new Set(nums)].join("") !== nums.join("")
};
