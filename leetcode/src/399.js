/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
  const divider = 10**9 + 7
  const n = nums.length
  const pow = [1]

  nums.sort((a, b) => a - b)

  for(let i = 1;i < nums.length;i++){
      pow.push((pow[pow.length-1]*2) % mod);
  }

  let left = 0
  let right = n - 1
  let ans = 0

  while (left < n) {
      while (nums[left] + nums[right] > target) {
          right -= 1
      }

      if (right >= left) {
          ans += pow[right-left]
          ans %= divider
      }

      left += 1
  }

  return ans
};