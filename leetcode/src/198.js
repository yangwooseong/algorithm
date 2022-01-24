let rob = (nums) => {
  const dp = nums.slice()
  const len = nums.length
  if (len === 1) return dp[0]

  for (let i = 0; i < len; i++) {
    if (i - 2 === 0) {
      dp[i] += dp[i - 2]
    } else if (i >= 3) {
      dp[i] += Math.max(dp[i - 3], dp[i - 2])
    }
  }

  return Math.max(dp[len - 1], dp[len - 2])
}

const nums = [2, 7, 9, 3, 1]
rob(nums)
