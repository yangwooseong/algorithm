// let setZeroes = (matrix) => {
//   let row = matrix.length
//   let col = matrix[0].length
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (matrix[i][j] === 0) {
//         for (let k = 0; k < row; k++) {
//           if (matrix[k][j] !== 0) matrix[k][j] = '0'
//         }
//         for (let k = 0; k < col; k++) {
//           if (matrix[j][k] !== 0) matrix[j][k] = '0'
//         }
//       }
//     }
//   }
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (matrix[i][j] === '0') matrix[i][j] = 0
//     }
//   }
// }
// 방문한 곳 또 방문해서 n, m이 커질 때 효율이 떨어짐

let setZeroes = (matrix) => {
  let r = matrix.length
  let c = matrix[0].length
  let firstRowZero = false

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        if (i === 0) {
          firstRowZero = 0
        } else {
          matrix[i][0] = 0
        }
      }
    }
  }

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0
      }
    }
  }
  if (matrix[0][0] === 0) {
    for (let i = 0; i < r; i++) {
      matrix[i][0] = 0
    }
  }
  if (firstRowZero) {
    for (let j = 0; j < c; j++) {
      matrix[0][j] = 0
    }
  }
}
