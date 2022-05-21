/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));
  return num >= Math.pow(2, 31) - 1 || num <= Math.pow(-2, 31) ? 0 : num;
};