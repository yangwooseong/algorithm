let setZeroes = (matrix) => {
  let row = matrix.length
  let col = matrix[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        for (let k = 0; k < row; k++) {
          if (matrix[k][j] !== 0) matrix[k][j] = '0'
        }
        for (let k = 0; k < col; k++) {
          if (matrix[j][k] !== 0) matrix[j][k] = '0'
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '0') matrix[i][j] = 0
    }
  }
}
