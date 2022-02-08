let islandPerimeter = (grid) => {
  const ROW = grid.length
  const COL = grid[0].length
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const visit = new Array(ROW).fill([]).map((v) => new Array(COL).fill(false))
  let ans = 0

  const dfs = (x, y, visit) => {
    visit[x][y] = true
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d]
      const ny = y + dy[d]
      if (nx === -1 || nx === ROW || ny === -1 || ny === COL || !grid[nx][ny]) {
        ans += 1
      } else if (!visit[nx][ny]) {
        dfs(nx, ny, visit)
      }
    }
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j]) {
        dfs(i, j, visit)
        return ans
      }
    }
  }
}

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]
console.log(islandPerimeter(grid))

// 하지만 dfs가 필요없다는 사실...
