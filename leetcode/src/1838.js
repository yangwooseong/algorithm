/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  let ans = 0
  let left = 0
  let right = 0
  let total = 0

  while (right < nums.length) {
    total += nums[right]
    while (nums[right] * (right - left + 1) - total > k) {
      total -= nums[left]
      left += 1
    }
    ans = Math.max(ans, right - left + 1)
    console.log(right, left)
    right += 1
  }

  return ans
}

const nums = [3, 6, 9]
const k = 2
maxFrequency(nums, k)
