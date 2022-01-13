/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function (k, n) {
  const answer = []
  const dfs = (idx, current) => {
    if (current.length === k) {
      if (current.reduce((a, b) => a + b) === n) {
        answer.push(current.slice())
      }
      return
    }
    for (let i = idx; i < 10; i++) {
      current.push(i)
      dfs(i + 1, current)
      current.pop()
    }
  }
  dfs(1, [])

  return answer
}

combinationSum3(9, 45)
