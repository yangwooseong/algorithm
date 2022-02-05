// let searchMatrix = (matrix, target) => {
//   let row = matrix.length
//   let col = matrix[0].length

//   let left = 0
//   let right = row - 1
//   let mid
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2)
//     if (matrix[mid][0] < target) {
//       left = mid + 1
//     } else if (matrix[mid][0] > target) {
//       right = mid - 1
//     } else {
//       return true
//     }
//   }

//   let r = left - 1
//   if (r < 0) return false

//   left = 0
//   right = col - 1
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2)
//     if (matrix[r][mid] < target) {
//       left = mid + 1
//     } else if (matrix[r][mid] > target) {
//       right = mid - 1
//     } else {
//       return true
//     }
//   }
//   return false
// }

let searchMatrix = (matrix, target) => {
  const row = matrix.length
  const col = matrix[0].length

  let left = 0
  let right = row * col - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midValue = matrix[Math.floor(mid / col)][mid % col]

    if (midValue === target) return true
    if (midValue < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}

const matrix = [[1]]
const target = 2
searchMatrix(matrix, target)
