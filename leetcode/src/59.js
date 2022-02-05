/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const arr = new Array(n).fill([]).map((v) => new Array(n).fill(0))

  let row = 0
  let col = 0
  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]
  let d = 0
  let step = 1
  while (step <= n * n) {
    arr[row][col] = step
    if (
      row + dx[d] === n ||
      row + dx[d] === -1 ||
      col + dy[d] === n ||
      col + dy[d] === -1 ||
      arr[row + dx[d]][col + dy[d]]
    ) {
      d = (d + 1) % 4
    }
    row += dx[d]
    col += dy[d]
    step += 1
  }
  // console.log(arr)
  return arr
}

generateMatrix(5)
