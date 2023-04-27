/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const board = new Array(row).fill(0).map(v => new Array(col).fill(0))
  
  const dfs = (i, j) => {
      if (board[i][j]) { return board[i][j] }
      const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

      board[i][j] = dirs
          .filter(dir => {
          const [dx, dy] = dir
          const nx = i + dx
          const ny = j + dy

          return 0 <= nx && nx < row && 0 <= ny && ny < col && matrix[nx][ny] > matrix[i][j]})
          .reduce((acc, cur) => Math.max(acc, 1 + dfs(i + cur[0], j + cur[1])), 1)


      return board[i][j]
  }

  for (let i=0;i<row;i++) {
      for (let j=0;j<col;j++) {
          dfs(i,j)
      }
  }
  
  return board.flatMap(v => v).reduce((acc,cur) => Math.max(acc, cur))
};