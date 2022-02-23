const diagonalSort = (mat) => {
  const dict = {}
  const row = mat.length
  const col = mat[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dict[i - j]) {
        dict[i - j].push(mat[i][j])
      } else {
        dict[i - j] = [mat[i][j]]
      }
    }
  }
  for (let i = -col + 1; i < row; i++) {
    dict[i] = dict[i].sort((a, b) => b - a)
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      mat[i][j] = dict[i - j].pop()
    }
  }

  return mat
}

const mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]

diagonalSort(mat)
