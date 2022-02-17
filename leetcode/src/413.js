/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  const l = nums.length
  if (l < 3) return 0
  else if (l === 3) return 1
  const dp = new Array(l + 1).fill(0)
  dp[3] = 1
  for (let i = 4; i < l + 1; i++) {
    dp[i] = dp[i - 1] + i - 2
  }
  let diff = nums[1] - nums[0]
  let length = 2
  let ans = 0
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== diff) {
      diff = nums[i] - nums[i - 1]
      ans += dp[length]
      length = 2
    } else {
      length += 1
    }
  }
  console.log(dp)
  return ans
}

const nums = [1, 2, 3, 8, 9, 10]
numberOfArithmeticSlices(nums)
