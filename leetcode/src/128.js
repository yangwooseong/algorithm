/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums = new Set(nums)
  let ans = 1
  for (let n of nums) {
    if (!nums.has(n - 1)) {
      let length = 1
      while (nums.has(n + length)) {
        length += 1
      }
      ans = Math.max(ans, lenth)
    }
  }
  return ans
}

const nums = [100, 4, 200, 1, 3, 2]
longestConsecutive(nums)
