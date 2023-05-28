/**
 * @param {number[]} stoneValue
 * @return {string}
 */

var stoneGameIII = function(stoneValue) {
  const n = stoneValue.length
  const sums = new Array(n).fill(0)
  const total = stoneValue.reduce((a, b) => a + b)
  const dp = {}

  for (let i=n-1;i>-1;i--) {
      sums[i] = (sums[i+1] ?? 0) + stoneValue[i]
      dp[i] = -Infinity
  }

  for (let i=n-1;i>-1;i--) {
      dp[i] = Math.max(dp[i], sums[i] - (dp[i+1] ?? 0))
      dp[i] = Math.max(dp[i], sums[i] - (dp[i+2] ?? 0))
      dp[i] = Math.max(dp[i], sums[i] - (dp[i+3] ?? 0))
      // console.log(dp)
  }

  if (dp[0] > total / 2) {
      return 'Alice'
  } else if (dp[0] < total / 2) {
      return 'Bob'
  } else {
      return 'Tie'
  }
};