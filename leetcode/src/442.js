/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const ans = []
  for (let n of nums) {
    if (nums[Math.abs(n) - 1] < 0) ans.push(Math.abs(n))
    else nums[Math.abs(n) - 1] *= -1
  }
  return ans
}
