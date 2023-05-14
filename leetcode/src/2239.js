/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function(nums) {
  const f = (idx) => Math.abs(nums[idx])

  nums.sort((a, b) => a - b)

  let left = 0
  let right = nums.length - 1
  let cur = left

  // console.log("LOG: ", nums)
  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (f(cur) > f(mid) || (f(cur) === f(mid) && mid > cur)) {
          cur = mid
      }

      if (nums[mid] > 0) {
          right = mid - 1
      } else if (nums[mid] < 0) {
          left = mid + 1
      } else {
          return nums[mid]
      }
  }

  return nums[cur]
};