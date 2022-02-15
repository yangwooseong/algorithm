/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const ROW = matrix.length
  const COL = matrix[0].length
  let ans = 0
  for (let i = ROW - 2; i > -1; i--) {
    for (let j = COL - 2; j > -1; j--) {
      if (matrix[i][j]) {
        matrix[i][j] =
          Math.min(matrix[i + 1][j], matrix[i][j + 1], matrix[i + 1][j + 1]) + 1
      }
    }
  }
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      ans += matrix[i][j]
    }
  }
  console.log(matrix)
  return ans
}

const matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]

countSquares(matrix)
