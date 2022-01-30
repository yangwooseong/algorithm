let searchRange = (nums, target) => {
  const binarySearch = (arr, num, direction) => {
    let left = 0
    let right = nums.length - 1
    let idx = -1
    let mid

    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (target > nums[mid]) {
        left = mid + 1
      } else if (target < nums[mid]) {
        right = mid - 1
      } else {
        idx = mid
        if (direction === 'left') {
          right = mid - 1
        } else if (direction === 'right') {
          left = mid + 1
        }
      }
    }
    return idx
  }

  const left = binarySearch(nums, target, 'left')
  const right = binarySearch(nums, target, 'right')

  return [left, right]
}
