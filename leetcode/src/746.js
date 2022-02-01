let minCostClimbingStairs = (cost) => {
  const dp = new Array(cost.length).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
  }
  console.log(dp)
  return dp[dp.length - 1]
}
