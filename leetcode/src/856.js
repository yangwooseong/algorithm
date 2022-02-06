/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let depth = 0
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      depth += 1
    } else {
      depth -= 1
    }

    if (s[i] === ')' && s[i - 1] === '(') {
      ans += Math.pow(2, depth)
    }
  }
  return ans
}
