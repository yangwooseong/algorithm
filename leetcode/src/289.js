/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const row = board.length
  const col = board[0].length

  const countLiveNeighbors = (m, n) => {
    let res = 0
    for (let i=m-1;i<m+2;i++) {
      for (let j=n-1;j<n+2;j++) {
        if ((i === m && j === n) || i < 0 || j < 0 || i >= row || j >= col) {
          continue
        }

        if (board[i][j] % 10 === 1) {
          res += 1
        }
      }
    }
    return res
  }


  for (let i=0;i<row;i++) {
    for (let j=0;j<col;j++) {
      const liveNeighbors = countLiveNeighbors(i, j)
      if (board[i][j] === 0) {
        if (liveNeighbors === 3) {
          board[i][j] += 10
        }
      }

      if (board[i][j] === 1) {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          board[i][j] += 10
        }
      }
    }
  }

  for (let i=0;i<row;i++) {
    for (let j=0;j<col;j++) {
      board[i][j] = Math.floor(board[i][j] / 10)
    }
  }

  return board
};



console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))
