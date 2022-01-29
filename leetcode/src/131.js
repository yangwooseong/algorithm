/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const answer = []

  const isPalindrome = (str) => {
    return str === str.split('').reverse().join('')
  }

  const dfs = (current, str) => {
    if (!str) {
      answer.push(current.slice())
      return
    }

    for (let i = 1; i < str.length + 1; i++) {
      if (isPalindrome(str.slice(0, i))) {
        current.push(str.slice(0, i))
        dfs(current, str.slice(i))
        current.pop()
      }
    }
  }
  dfs([], s)
  console.log(answer)
  return answer
}
const s = 'aab'

partition(s)
