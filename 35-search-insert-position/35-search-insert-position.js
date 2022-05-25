/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let position;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      position = i;
      break;
    } else {
      let newArr = [...nums, target].sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      console.log(newArr);
      newArr.forEach((ele, index) => {
        if (ele === target) {
          position = index;
        }
      });
    }
  }
  return position;
};