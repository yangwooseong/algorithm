let rob1 = (nums) => {
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

let rob = (nums) => {
  if (nums.length <= 2) return Math.max(...nums)
  return Math.max(rob1(nums.slice(0, -1)), rob1(nums.slice(1)))
}

rob([200, 3, 140, 20, 10])
