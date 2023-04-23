/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const reorder = (arr, num, right) => {
      let left = 0
      while (arr[right] === num) {
          right -= 1
      }

      while (left < right) {
          while (arr[right] === num) {
              right -= 1
          }

          if (left >= right) { break }

          if (arr[left] === num) {
              arr[left] = arr[right]
              arr[right] = num
              right -= 1
          }

          left += 1
      }

      while (arr[right] === num) {
          right -= 1
      }

      return right 
  }

  const right = reorder(nums, 2, nums.length - 1)
  reorder(nums, 1, right)
};