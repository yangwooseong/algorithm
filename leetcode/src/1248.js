/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const atMost = (k) => {
      let i = 0
      let ans = 0

      for (let j=0;j<nums.length;j++) {
          k -= nums[j] % 2

          while (k < 0) {
              k += nums[i] % 2
              i += 1
          }

          ans += j - i + 1
      }

      return ans
  }

  return atMost(k) - atMost(k-1)
};