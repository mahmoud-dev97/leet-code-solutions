/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let position = -1;
  nums.forEach((e, i) => {
    if (e === target) position = i;
  });
  return position;
};