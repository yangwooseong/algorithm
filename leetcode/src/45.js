/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length
  let dp = []
  const MAX = 10000
  for (let i = 0; i < n; i++) {
    dp[i] = MAX
  }

  dp[0] = 0
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < nums[i] + 1; j++) {
      if (i + j >= n) continue
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1)
    }
  }
  return dp[n - 1]
}
