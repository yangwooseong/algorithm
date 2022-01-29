/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0
  let right = 0
  let total = 0
  let ans = Infinity
  while (right < nums.length) {
    total += nums[right]
    while (total >= target) {
      ans = Math.min(ans, right - left + 1)
      console.log(left, right, ans)
      total -= nums[left]
      left += 1
    }
    right += 1
  }
  return ans
}

const target = 7
const nums = [2, 3, 1, 2, 4, 3]
minSubArrayLen(target, nums)
