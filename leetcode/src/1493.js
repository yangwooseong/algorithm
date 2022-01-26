let longestSubarray = (nums) => {
  if (nums.filter(v === 0).length === 0) return nums.length
  const arr = [0, 0]
  let left = 0
  let ans = 0

  for (let right = 0; right < nums.length; right++) {
    arr[nums[right]] += 1

    while (arr[0] > 1) {
      arr[nums[left]] -= 1
      left += 1
    }
    ans = Math.max(ans, right - left)
    // console.log(left, right, ans)
  }
  return ans
}

// const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
const nums = [1, 1]
longestSubarray(nums)
