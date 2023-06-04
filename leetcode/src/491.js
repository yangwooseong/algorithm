/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ans = []

  const dfs = (start, cur) => {
      if (cur.length > 1) { ans.push(cur.slice()) }

      const visited = new Set()

      for (let i=start;i<nums.length;i++) {

          if (visited.has(nums[i]) || cur.length && cur.at(-1) > nums[i]) { continue }
          cur.push(nums[i])
          visited.add(nums[i])
          dfs(i+1, cur)
          cur.pop()
      }
  }

  dfs(0, [])
  return ans
};