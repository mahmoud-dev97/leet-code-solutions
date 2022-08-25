/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let newArr = [...new Set(nums)].join("");
  return newArr !== nums.join("")
};
