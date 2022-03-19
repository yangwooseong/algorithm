// var closedIsland = function (grid) {
//   const ROW = grid.length
//   const COL = grid[0].length
//   let visited = new Array(ROW).fill(0).map((v) => new Array(COL).fill(false))
//   const dx = [0, 1, 0, -1]
//   const dy = [1, 0, -1, 0]
//   let num = 0
//   const bfs = (i, j, visited) => {
//     const queue = [[i, j]]
//     while (queue.length) {
//       const [x, y] = queue.pop()
//       visited[x][y] = true
//       for (let d = 0; d < 4; d++) {
//         const nx = x + dx[d]
//         const ny = y + dy[d]
//         if (
//           0 <= nx &&
//           nx < ROW &&
//           0 <= ny &&
//           ny < COL &&
//           !grid[nx][ny] &&
//           !visited[nx][ny]
//         ) {
//           queue.push([nx, ny])
//         }
//       }
//     }
//     return 1
//   }

//   for (let i = 0; i < ROW; i++) {
//     for (let j = 0; j < COL; j++) {
//       if (!visited[i][j] && !grid[i][j]) {
//         bfs(i, j, visited)
//         num += 1
//       }
//     }
//   }
//   visited = new Array(ROW).fill(0).map((v) => new Array(COL).fill(false))
//   for (let i = 0; i < ROW; i++) {
//     for (let j = 0; j < COL; j++) {
//       if (
//         !visited[i][j] &&
//         !grid[i][j] &&
//         ([0, ROW - 1].includes(i) || [0, COL - 1].includes(j))
//       ) {
//         bfs(i, j, visited)
//         num -= 1
//       }
//     }
//   }
//   return num
// }

// const grid = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 1, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1, 0, 1],
//   [1, 0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ]

// closedIsland(grid)

// discussion solution: flood fill

const closedIsland = (grid) => {
  const ROW = grid.length
  const COL = grid[0].length
  const fill = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= ROW || j >= COL || grid[i][j]) return 0
    grid[i][j] = 1
    fill(grid, i - 1, j)
    fill(grid, i + 1, j)
    fill(grid, i, j - 1)
    fill(grid, i, j + 1)
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (i * j * (i - ROW + 1) * (j - COL + 1) === 0) {
        fill(grid, i, j)
      }
    }
  }
  let ans = 0
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (!grid[i][j]) {
        fill(grid, i, j)
        ans += 1
      }
    }
  }
  console.log(ans)
  return ans
}

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
]

closedIsland(grid)
