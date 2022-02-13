// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function (matrix, target) {
//   const binarySearch = (arr) => {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2)
//       if (arr[mid] < target) {
//         left = mid + 1
//       } else if (arr[mid] > target) {
//         right = mid - 1
//       } else {
//         console.log(left, right, mid, arr.slice())
//         return true
//       }
//     }
//     return false
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     if (binarySearch(matrix[i])) return true
//   }
//   return false
// } O(m * log(n))

let searchMatrix = (matrix, target) => {
  let col = matrix[0].length - 1
  let row = 0

  // iterate from right top to left bottom
  while (col >= 0 && row <= matrix.length - 1) {
    if (target < matrix[row][col]) {
      col--
    } else if (target > matrix[row][col]) {
      row++
    } else {
      return true
    }
  }
  return false
} // O(m + n)

// n >> m 일때는 O(m*log(n))이, 그 밖에는 O(m+n) 이 더 좋다.

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]
const target = 20
searchMatrix(matrix, target)
