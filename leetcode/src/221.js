var maximalSquare = function (matrix) {
  let ans = 0

  for (let i = matrix.length - 1; i > -1; i--) {
    for (let j = matrix[0].length - 1; j > -1; j--) {
      if (matrix[i][j] === '0') continue
      if (i !== matrix.length - 1 && j !== matrix[0].length - 1) {
        matrix[i][j] =
          Math.min(matrix[i + 1][j], matrix[i][j + 1], matrix[i + 1][j + 1]) + 1
      }
      ans = Math.max(ans, matrix[i][j] ** 2)
    }
  }
  return ans
}
