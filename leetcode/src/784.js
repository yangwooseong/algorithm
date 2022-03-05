/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const ans = []
  const backtracking = (idx, cur) => {
    if (cur.length === s.length) {
      ans.push(cur.join(''))
      return
    }

    for (let i = idx; i < s.length; i++) {
      if ('0' <= s[i] && s[i] <= '9') {
        cur.push(s[i])
        backtracking(i + 1, cur)
        cur.pop()
      } else {
        cur.push(s[i].toLowerCase())
        backtracking(i + 1, cur)
        cur.pop()

        cur.push(s[i].toUpperCase())
        backtracking(i + 1, cur)
        cur.pop()
      }
    }
  }
  backtracking(0, [])

  return ans
}
