const findKthLargest = (nums, k) => {
  k = nums.length - k
  const quickSelect = (l, r) => {
    let p = l
    for (let i = l; i < r; i++) {
      if (nums[i] < nums[r]) {
        ;[nums[i], nums[p]] = [nums[p], nums[i]]
        p += 1
      }
    }
    ;[nums[p], nums[r]] = [nums[r], nums[p]]
    if (p < k) return quickSelect(p + 1, r)
    else if (k < p) return quickSelect(l, p - 1)
    else return nums[p]
  }
  return quickSelect(0, nums.length - 1)
}
