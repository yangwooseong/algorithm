/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const l = nums.length
  step = 0
  while (idx < l) {
    if (nums[idx] === 0) {
      nums.splice(idx, 1)
      nums.push(0)
    } else {
      idx += 1
    }
    step += 1
  }
  console.log(nums)
}
