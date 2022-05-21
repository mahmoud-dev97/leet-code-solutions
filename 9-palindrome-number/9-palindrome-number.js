/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let boolean;
  rev = Number(String(x).split("").reverse().join(""));
  let newNum = Array.from(String(x), Number);
  for (let i = 0; i < newNum.length; i++) {
    if (newNum[0] === newNum[newNum.length - 1] && x === rev) {
      boolean = true;
    } else {
      boolean = false;
    }
  }
  return boolean;
};