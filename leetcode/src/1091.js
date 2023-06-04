/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0]) { return -1 }

  const row = grid.length
  const col = grid[0].length

  const visited = new Array(row).fill(0).map(v => new Array(col).fill(0))

  let step = 1
  let queue = [[0, 0]]
  const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1]
  ]

  while (queue.length) {
      const nextQueue = []

      for (const [x, y] of queue) {
          if (x === row - 1 && y === col - 1) { return step }
          for (const dir of dirs) {
              const nx = x + dir[0]
              const ny = y + dir[1]

              if (nx === -1 || nx === row || ny === -1 || ny === col || visited[nx][ny] || grid[nx][ny]) { continue }

              visited[nx][ny] = 1
              nextQueue.push([nx, ny])
          }
      }

      step += 1
      queue = nextQueue
  }

  return - 1
};