/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const res = []
  const helper = (left, right, par) => {
    if (!left && !right) { res.push(par) }
    if (left < 0 || right < 0) { return }

      if (left < right) {
        helper(left - 1, right, par + '(')
        helper(left, right - 1, par + ')')
      } else if (left === right) {
        helper(left - 1, right, par + '(')
      }   
  }

  helper(n, n, '')
  return res
};

generateParenthesis(3)