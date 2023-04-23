/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  const swap = (i, j) => {
      const tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
  }

  let red = 0
  let white = 0
  let blue = nums.length - 1

  while (white <= blue) {
      if (nums[white] === 0) {
          swap(white, red)
          white += 1
          red += 1
      } else if (nums[white] === 1) {
          white += 1
      } else {
          swap(white, blue)
          blue -= 1
      }
  }
};