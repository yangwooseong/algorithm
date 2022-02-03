// let pacificAtlantic = (heights) => {
//   const m = heights.length
//   const n = heights[0].length

//   const cache = new Array(m).fill(0).map((v) => new Array(n).fill(false))

//   const bfs = (row, col) => {
//     let dx = [0, 1, 0, -1]
//     let dy = [1, 0, -1, 0]
//     let queue = [[row, col]]
//     let visited = new Array(m).fill(0).map((v) => new Array(n).fill(false))
//     let pacific = false,
//       atlantic = false

//     while (queue.length) {
//       let nextQueue = []
//       for (let q of queue) {
//         let [x, y] = q
//         visited[x][y] = true
//         if (x === 0 || y === 0) pacific = true
//         if (x === m - 1 || y === n - 1) atlantic = true
//         if (pacific && atlantic) return true

//         for (let d = 0; d < 4; d++) {
//           let nx = x + dx[d],
//             ny = y + dy[d]
//           if (
//             0 <= nx &&
//             nx < m &&
//             0 <= ny &&
//             ny < n &&
//             heights[nx][ny] <= heights[x][y] &&
//             !visited[nx][ny]
//           ) {
//             if (cache[nx][ny]) return true
//             visited[nx][ny] = true
//             nextQueue.push([nx, ny])
//           }
//         }
//       }
//       queue = nextQueue
//     }
//     return false
//   }

//   const ans = []
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (bfs(i, j)) {
//         ans.push([i, j])
//         cache[i][j] = true
//       }
//     }
//   }
//   return ans
// }

// const heights = [
//   [1, 2, 2, 3, 5],
//   [3, 2, 3, 4, 4],
//   [2, 4, 5, 3, 1],
//   [6, 7, 1, 4, 5],
//   [5, 1, 1, 2, 4],
// ]

// pacificAtlantic(heights)

// more efficient solution
let pacificAtlantic = (heights) => {
  const ROWS = heights.length
  const COLS = heights[0].length
  const pac = new Array(ROWS).fill(0).map((v) => new Array(COLS).fill(false))
  const atl = new Array(ROWS).fill(0).map((v) => new Array(COLS).fill(false))

  const dfs = (r, c, possible, prevHeight) => {
    if (
      r < 0 ||
      c < 0 ||
      r === ROWS ||
      c === COLS ||
      possible[r][c] ||
      heights[r][c] < prevHeight
    ) {
      return
    }

    possible[r][c] = true
    dfs(r + 1, c, possible, heights[r][c])
    dfs(r - 1, c, possible, heights[r][c])
    dfs(r, c + 1, possible, heights[r][c])
    dfs(r, c - 1, possible, heights[r][c])
  }

  for (let c = 0; c < COLS; c++) {
    dfs(0, c, pac, heights[0][c])
    dfs(ROWS - 1, c, atl, heights[ROWS - 1][c])
  }
  for (let r = 0; r < ROWS; r++) {
    dfs(r, 0, pac, heights[r][0])
    dfs(r, COLS - 1, atl, heights[r][COLS - 1])
  }

  const answer = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (atl[r][c] && parseInt[r][c]) answer.push([r, c])
    }
  }
  return answer
}

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
]

pacificAtlantic(heights)
