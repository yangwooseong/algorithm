const findMaxLength = (nums) => {
  const hashMap = {}
  let currentSum = 0
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    currentSum = nums[i] === 0 ? currentSum - 1 : currentSum + 1
    if (hashMap[currentSum] !== undefined) {
      ans = Math.max(ans, i - hashMap[currentSum])
    } else if (currentSum === 0) {
      ans = Math.max(ans, i + 1)
    } else {
      hashMap[currentSum] = i
    }
    console.log(hashMap, currentSum, ans, i)
  }
  return ans
}

const nums = [1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0]
findMaxLength(nums)
