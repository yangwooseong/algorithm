/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const ROW = grid.length
  const COL = grid[0].length
  const fill = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= ROW || j >= COL || !grid[i][j]) return 0
    grid[i][j] = 0
    return (
      1 +
      fill(grid, i - 1, j) +
      fill(grid, i + 1, j) +
      fill(grid, i, j - 1) +
      fill(grid, i, j + 1)
    )
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (i * j * (i - ROW + 1) * (j - COL + 1) === 0 && grid[i][j])
        fill(grid, i, j)
    }
  }
  let ans = 0
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j]) ans += fill(grid, i, j)
    }
  }
  return ans
}
