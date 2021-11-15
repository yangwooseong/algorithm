/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  function bfs() {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    let visited = new Array(grid.length)
    let cnt = 0
    for (let i = 0; i < grid.length; i++) {
      visited[i] = new Array(grid[0].length).fill(0)
    }
    while (queue.length > 0) {
      next_queue = []
      for (let j = 0; j < queue.length; j++) {
        const x = queue[j][0]
        const y = queue[j][1]
        visited[x][y] = 1
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k]
          const ny = y + dy[k]
          if (
            0 <= nx &&
            nx < grid.length &&
            0 <= ny &&
            ny < grid[0].length &&
            !visited[nx][ny] &&
            grid[nx][ny] === 1
          ) {
            visited[nx][ny] = 1
            grid[nx][ny] = 2
            next_queue.push([nx, ny])
          }
        }
      }
      queue = next_queue.slice()
      // console.log(grid)
      if (queue.length > 0) {
        cnt += 1
      }
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) return -1
      }
    }
    return cnt
  }

  let queue = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      grid[i][j] === 2 && queue.push([i, j])
    }
  }
  return bfs()
}
