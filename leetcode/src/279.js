/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < n + 1; i++) {
    for (let j = Math.floor(i ** 0.5); j > 0; j--) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j * j])
      // console.log(i, j, dp.slice())
    }
  }
  // console.log(dp.slice())
  return dp[dp.length - 1]
}

numSquares(13)
