/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const l = nums.length
  let lastPeakIdx = -1
  for (let i = 1; i < l; i++) {
    if (nums[i] > nums[i - 1]) {
      lastPeakIdx = i
    }
  }

  if (lastPeakIdx === -1) {
    return nums.sort()
  }

  let lastBiggerNumIdx = lastPeakIdx
  for (i = lastPeakIdx; i < l; i++) {
    if (nums[i] > nums[lastPeakIdx - 1] && nums[i] < nums[lastPeakIdx]) {
      lastBiggerNumIdx = i
    }
  }
  const tmp = nums[lastPeakIdx - 1]
  nums[lastPeakIdx - 1] = nums[lastBiggerNumIdx]
  nums[lastBiggerNumIdx] = tmp

  return nums.slice(0, lastPeakIdx).concat(nums.slice(lastPeakIdx).sort())
}

console.log(nextPermutation([1, 3, 2]))
