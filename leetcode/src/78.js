/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  function dfs(current, idx) {
    ans.push(current.slice())
    if (current.length === nums.length) {
      return
    }

    for (let i = idx; i < nums.length; i++) {
      current.push(nums[i])
      dfs(current, i + 1)
      current.pop(nums[i])
    }
  }

  ans = []
  dfs([], 0)
  return ans
}

subsets([1, 2, 3])
