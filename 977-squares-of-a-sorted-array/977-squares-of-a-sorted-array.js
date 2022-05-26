/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let number = nums.map((ele) => Math.pow(ele, 2));
  return number.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
};