/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let left = 0
  let right = matrix.length - 1
  let top, bottom

  while (left < right) {
    top = left
    bottom = right
    for (let i = left; i < right; i++) {
      let topLeft = matrix[top][left + i]
      matrix[top][left + i] = matrix[bottom][left + i]
      matrix[bottom][left + i] = matrix[bottom][right + i]
      matrix[bottom][right + i] = matrix[top][right + i]
      matrix[top][right + i] = topLeft
    }
    left += 1
    right -= 1
    console.log(matrix.slice())
  }
  return matrix
}
