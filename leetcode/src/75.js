/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let idx = 0
  let step = 0
  while (step < nums.length) {
    const n = nums[idx]

    if (n === 2) {
      nums.splice(idx, 1)
      nums.push(n)
    } else if (n === 0) {
      nums.splice(idx, 1)
      nums.unshift(n)
      idx += 1
    } else if (n === 1) {
      idx += 1
    }
    step += 1
  }
  return nums
}

sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
sortColors([0])
sortColors([1])
