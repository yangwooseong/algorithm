/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const ROW = grid.length
  const COL = grid[0].length
  const visited = new Array(ROW).fill(0).map((v) => new Array(COL).fill(false))
  let ans = 0

  const backtracking = (cur, row, col) => {
    ans = Math.max(ans, cur)
    // console.log(cur, row, col, ans)

    for (let d = 0; d < 4; d++) {
      const nx = row + dx[d]
      const ny = col + dy[d]
      if (
        0 <= nx &&
        nx < ROW &&
        0 <= ny &&
        ny < COL &&
        !visited[nx][ny] &&
        grid[nx][ny]
      ) {
        visited[nx][ny] = true
        backtracking(cur + grid[nx][ny], nx, ny)
        visited[nx][ny] = false
      }
    }
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j]) {
        visited[i][j] = true
        backtracking(grid[i][j], i, j)
        visited[i][j] = false
      }
    }
  }

  return ans
}

const grid = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
]
console.log(getMaximumGold(grid))
