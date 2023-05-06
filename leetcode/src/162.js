/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1

  const valueOf = (idx) => nums[idx] ?? -Infinity

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      // peak
      if (nums[mid] > valueOf(mid-1) && nums[mid] > valueOf(mid+1)) {
          return mid
      // sliding up
      } else if (nums[mid] > valueOf(mid-1) && nums[mid] < valueOf(mid+1)) {
          left = mid + 1
      // sliding down
      } else if (nums[mid] < valueOf(mid-1) && nums[mid] > valueOf(mid+1)) {
          right = mid - 1
      // vally
      } else {
          left = mid + 1 
      }
  }
};