/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const res = []
  const dfs = (idx, arr) => {
    res.push(arr.slice())
    for(let i=idx; i<nums.length; i++) {
      arr.push(nums[i])
      dfs(i+1, arr)
      arr.pop()
    }
  }
  
  dfs(0, [])
  return res
};