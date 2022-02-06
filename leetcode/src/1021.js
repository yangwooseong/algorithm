/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let ans = ''
  let primitiveParenthes = ''
  let left = 0
  for (let c of s) {
    if (c === '(') {
      left += 1
      primitiveParenthes += c
    } else {
      left -= 1
      primitiveParenthes += c
      if (left === 0) {
        ans += primitiveParenthes.slice(1, -1)
        primitiveParenthes = ''
      }
    }
  }
  return ans
}
