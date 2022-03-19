/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j === 0) {
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j + 1])
      } else if (j === matrix[0].length - 1) {
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j - 1])
      } else {
        matrix[i][j] += Math.min(
          matrix[i - 1][j - 1],
          matrix[i - 1][j],
          matrix[i - 1][j + 1],
        )
      }
    }
  }
  return Math.min(...matrix[matrix.length - 1])
}
