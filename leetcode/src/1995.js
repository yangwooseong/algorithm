/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
  const dict = {}
  let ans = 0

  for (let i=2;i<nums.length;i++) {
      nums.slice(0, i-1).forEach(v => {
          const sum = nums[i-1] + v
          dict[sum] = dict[sum] ? dict[sum] + 1 : 1
      })

      nums.slice(i+1).forEach(v => {
          const diff = v - nums[i]
          ans += dict[diff] ?? 0
      })
  }

  return ans
};