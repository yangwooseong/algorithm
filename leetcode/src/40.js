/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  console.log(candidates)
  const answer = []
  const dfs = (idx, current) => {
    if (current.reduce((a, b) => a + b, 0) === target) {
      answer.push(current)
      console.log(current)
    } else if (
      current.reduce((a, b) => a + b, 0) > target ||
      current.length === candidates.length
    ) {
      return
    }

    let prev = -1
    for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] === prev) continue
      current.push(candidates[i])
      dfs(i + 1, current)
      current.pop()
      prev = candidates[i]
    }
  }

  dfs(0, [])
}

const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8
combinationSum2(candidates, target)
