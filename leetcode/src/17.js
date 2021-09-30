/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let result = []
  function dfs(idx, path) {
    if (path.length === digits.length) {
      // console.log(path)
      result.push(path)
      return
    }

    for (let i = idx; i < digits.length; i++) {
      for (let j of obj[digits[i]]) {
        dfs(i + 1, path + j)
      }
    }
  }

  dfs(0, '')
  return result
}
