let findMin = (nums) => {
  let left = 0
  let right = nums.length - 1
  let mid
  let min = nums[0]

  while (left <= right) {
    // console.log(left, right, min)
    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left])
      break
    }

    mid = Math.floor((left + right) / 2)
    if (nums[mid] >= nums[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    min = Math.min(min, nums[mid])
  }
  return min
}

const nums = [3, 4, 5, 1, 2]
findMin(nums)
