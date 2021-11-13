/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  function sortAgain(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return {
          arr: nums.slice(i + 1).concat(nums.slice(0, i + 1)),
          idx: i + 1,
        }
      }
    }
    return {
      arr: nums,
      idx: 0,
    }
  }

  const { arr: sortedArray, idx } = sortAgain(nums)
  console.log(sortedArray, idx)
  let start = 0
  let end = sortedArray.length - 1
  let mid = parseInt((start + end) / 2, 10)

  while (sortedArray[mid] !== target && start < end) {
    if (sortedArray[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = parseInt((start + end) / 2, 10)
  }

  if (sortedArray[mid] !== target) return -1
  if (target >= nums[0]) {
    return mid + idx
  } else {
    return mid
  }
}
