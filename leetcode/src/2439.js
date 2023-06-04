/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
  const isValid = (max) => {
      let buffer = 0
      
      for (const num of nums) {
          if (num < max) {
              buffer += max - num
          } else {
              if (num - buffer > max) { return false }

              buffer -= num - max
          }
      }

      return true
  }

  let left = 2
  let right = nums.reduce((a, b) => Math.max(a, b))

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (isValid(mid)) {
          right = mid - 1
      } else {
          left = mid + 1
      }
  }

  return left
};