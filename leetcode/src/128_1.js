/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  const dict = {}
  let ans = 0
  let lcs = 1

  const getLcs = (num) => {
      if (dict[num]) { return dict[num] }

      if (numSet.has(num-1)) {
          dict[num] = getLcs(num-1) + 1
          return dict[num]
      } else {
          return 1
      }
  }

  nums.forEach(num => {
      ans = Math.max(ans, getLcs(num))
  })

  return ans
};