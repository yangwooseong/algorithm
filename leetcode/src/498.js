/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const dirs = [[-1, 1], [1, -1]]
  const row = mat.length
  const col = mat[0].length
  const ans = new Array(row + col -1).fill(0).map(v => [].slice())

  for (let i=0;i<row;i++) {
      for (let j=0;j<col;j++) {
          if ((i + j) % 2) {
              ans[i+j].push(mat[i][j])
          } else {
              ans[i+j].unshift(mat[i][j])
          }
      }
  }

  return ans.flatMap(v => v)
};