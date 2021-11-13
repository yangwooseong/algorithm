/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = []
  const n = grid.length
  const m = grid[0].length

  for (let i = 0; i < n; i++) {
    dp.push([])
  }
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j === 0) {
        dp[i][j] = grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + Math.min(grid[i][j])
      }
    }
  }
  return dp[n - 1][m - 1]
}
