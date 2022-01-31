let search = (nums, target) => {
  let l = 0
  let r = nums.length - 1
  let m

  while (l <= r) {
    m = Math.floor((l + r) / 2)
    if (nums[m] === target) return m

    // left sorted portion
    if (nums[l] <= nums[m]) {
      if (nums[l] <= target && target <= nums[m]) {
        r = m - 1
      } else l = m + 1
    }
    // right sorted portion
    else {
      if (nums[m] <= target && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
}
