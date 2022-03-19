/**
 * @param {string} s
 * @return {number}
 */
// var minSwaps = function (s) {
//   let left = 0
//   let lastIndexOfRightParenthes = s.length - 1
//   let ans = 0
//   const arr = s.split('')
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ']') left -= 1
//     else left += 1

//     if (left < 0) {
//       while (arr[lastIndexOfRightParenthes] === ']') {
//         lastIndexOfRightParenthes -= 1
//       }
//       arr[i] = '['
//       arr[lastIndexOfRightParenthes] = ']'
//       left += 2
//       lastIndexOfRightParenthes -= 1
//       ans += 1
//     }
//   }
//   return ans
// }

// from neetcode youtube..wow!
const minSwaps = (s) => {
  let right = 0
  let maxRight = 0
  for (const c of s) {
    if (c === '[') {
      right -= 1
    } else {
      right += 1
    }
    maxRight = Math.max(right, maxRight)
  }
  return Math.ceil(maxRight / 2)
}
