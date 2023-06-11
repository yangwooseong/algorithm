/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
  const row = grid.length
  const col = grid[0].length
  const dfs = (x, y) => {
      if (x < 0 || x === row || y < 0 || y === col || !grid[x][y] || visited[x][y]) { return }

      visited[x][y] = true
      queue.push([x,y])
      dfs(x+1, y)
      dfs(x-1, y)
      dfs(x, y+1)
      dfs(x, y-1)
  }

  const visited = new Array(row).fill(0).map(v => new Array(col).map(v => false))

  let queue = []

  for (let i=0;i<row;i++) {
      for (let j=0;j<col;j++) {
          if (!queue.length && grid[i][j]) {
              dfs(i, j)
          }
      }
  }

  let ans = 0

  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  while (queue.length) {
      const nextQueue = []
      for (const [x,y] of queue) {
          for (const dir of dirs) {
              const nx = x + dir[0]
              const ny = y + dir[1]

              if (-1 < nx && nx < row && -1 < ny && ny < col && !visited[nx][ny]) {
                  if (grid[nx][ny]) {
                      return ans
                  }
                  nextQueue.push([nx, ny])
                  visited[nx][ny] = true 
              }
          }
      }
      queue = nextQueue
      ans += 1
      // console.log(queue)
  }

  console.log(queue)
};