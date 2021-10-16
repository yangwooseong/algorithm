/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  function dfs(current, idx) {
    if (current.reduce((a, b) => a + b, 0) === target) {
      ans.push(current.slice())
      return
    } else if (current.reduce((a, b) => a + b, 0) > target) {
      return
    }

    for (let i = idx; i < candidates.length; i++) {
      current.push(candidates[i])
      dfs(current, i)
      current.pop()
    }
  }
  ans = []
  dfs([], 0)
  console.log(ans)
  return ans
}

combinationSum([2, 3, 6, 7], 7)
