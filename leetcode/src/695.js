/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const ROW = grid.length
  const COL = grid[0].length
  const dfs = (i, j, num) => {
    if (i < 0 || j < 0 || i >= ROW || j >= COL || !grid[i][j]) return 0
    grid[i][j] = 0
    return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
  }

  let ans = 0
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j]) {
        ans = Math.max(ans, dfs(i, j))
      }
    }
  }
  return ans
}
