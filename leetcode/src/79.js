/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]
  let ans = false

  function dfs(x, y, cnt, visited) {
    visited[x][y] = 1
    if (cnt + 1 === word.length) {
      ans = true
      return
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (0 <= nx && nx < board.length && 0 <= ny && ny < board[0].length) {
        if (board[nx][ny] === word[cnt + 1] && !visited[nx][ny]) {
          dfs(nx, ny, cnt + 1, visited)
          visited[nx][ny] = 0
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (ans) continue
      let visited = new Array(board.length)
      for (k = 0; k < visited.length; k++) {
        visited[k] = new Array(board[0].length)
      }
      board[i][j] === word[0] && dfs(i, j, 0, visited)
    }
  }
  return ans
}
// let board = [
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E'],
// ]
// let word = 'ABCCED'

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'E', 'S'],
  ['A', 'D', 'E', 'E'],
]

let word = 'ABCEFSADEESE'

exist(board, word)
