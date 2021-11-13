/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binary(arr, num) {
    let left = 0
    let right = arr.length - 1
    let mid = parseInt((left + right) / 2, 10)

    while (arr[mid] !== num && left < right) {
      console.log(left, right, mid)
      if (arr[mid] > num) {
        right = mid - 1
      } else {
        left = mid + 1
      }
      mid = parseInt((left + right) / 2, 10)
    }
    return mid
  }

  const m = binary(nums, target)
  if (nums[m] !== target) {
    return [-1, -1]
  } else {
    let start = m
    let end = m
    while (nums[start] === target) {
      start -= 1
    }
    while (nums[end] === target) {
      end += 1
    }
    return [start + 1, end - 1]
  }
}
