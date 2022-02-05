let spiralOrder = (matrix) => {
  const ROW = matrix.length
  const COL = matrix[0].length
  let row = 0
  let col = 0
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  const answer = []
  let dir = 0
  let step = 0

  while (step < ROW * COL) {
    answer.push(matrix[row][col])
    matrix[row][col] = false
    step += 1
    if (
      row + dx[dir] === -1 ||
      row + dx[dir] === ROW ||
      col + dy[dir] === -1 ||
      col + dy[dir] === COL ||
      matrix[row + dx[dir]][col + dy[dir]] === false
    ) {
      dir = (dir + 1) % 4
    }
    row += dx[dir]
    col += dy[dir]
  }
  console.log(answer)
  return answer
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
spiralOrder(matrix)
