/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let stack = []
  let res = []

  function backtrack(openN, closeN) {
    if (openN === n && closeN === n) {
      res.push(stack.join(''))
    }

    if (openN < n) {
      stack.push('(')
      backtrack(openN + 1, closeN)
      stack.pop()
    }

    if (closeN < openN) {
      stack.push(')')
      backtrack(openN, closeN + 1)
      stack.pop()
    }
  }

  backtrack(0, 0)
  return res
}

// generateParenthesis(4)
