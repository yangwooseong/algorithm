let solve = (board) => {
  let m = board.length
  let n = board[0].length
  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]
  const visited = new Array(m).fill([]).map((v) => new Array(n).fill(false))

  console.log(visited)
  const bfs = (x, y, flip) => {
    visited[x][y] = true
    let queue = [[x, y]]
    while (queue.length) {
      let nextQueue = []
      for (let q of queue) {
        const [x, y] = q
        if (flip) board[x][y] = 'X'
        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d]
          const ny = y + dy[d]
          if (
            0 <= nx &&
            nx < m &&
            0 <= ny &&
            ny < n &&
            !visited[nx][ny] &&
            board[nx][ny] === 'O'
          ) {
            visited[nx][ny] = true
            nextQueue.push([nx, ny])
            if (flip) board[nx][ny] = 'X'
          }
        }
      }
      queue = nextQueue.slice()
      console.log(queue)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (!visited[i][j] && board[i][j] === 'O') {
          bfs(i, j, false)
        }
        visited[i][j] = true
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && board[i][j] === 'O') {
        bfs(i, j, true)
      }
    }
  }
  console.log(board)
}

const board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
]
solve(board)
