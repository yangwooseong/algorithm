/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let left = 0
  let ans = 0
  for (let c of s) {
    if (c === ')') {
      if (left === 0) {
        ans += 1
      } else if (left > 0) {
        left -= 1
      }
    } else if (c === '(') {
      left += 1
    }
  }
  ans += left
  return ans
}
