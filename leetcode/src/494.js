/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  const n = nums.length
  const dp = new Array(n).fill(0).map(() => ({}))
  dp[0][nums[0]] = (dp[0][nums[0]] ?? 0) + 1
  dp[0][-nums[0]] = (dp[0][-nums[0]] ?? 0) + 1

  for (let i=1;i<n;i++) {
      const num = nums[i]
      for (const sum of Object.keys(dp[i-1])) {
          dp[i][Number(sum) + Number(nums[i])] = (dp[i][Number(sum) + Number(nums[i])] ?? 0) + dp[i-1][sum]
          dp[i][Number(sum) - Number(nums[i])] = (dp[i][Number(sum) - Number(nums[i])] ?? 0) + dp[i-1][sum]
      }
  }
  
  return dp[dp.length-1][target] ?? 0
};