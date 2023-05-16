/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const row = board.length
  const col = board[0].length
  const visited = new Array(row).fill(0).map(v => new Array(col).fill(false))

  const dfs = (i, j, idx) => {
      if (idx === word.length) { return true }

      if (i < 0 || i > row -1 || j < 0 || j > col - 1 || visited[i][j] || board[i][j] !== word[idx]) { return false }

      visited[i][j] = true
      if (dfs(i+1, j, idx + 1) || dfs(i-1, j, idx + 1) || dfs(i, j+1, idx + 1) || dfs(i, j-1, idx + 1)) {
          return true
      }
      visited[i][j] = false

      return false
  }

  for (let i=0;i<row;i++) {
      for (let j=0;j<col;j++) {
          if (dfs(i, j, 0)) { return true }
      }
  }

  return false
};