let maxSubarraySumCircular = (nums) => {
  let maxSum = nums[0]
  let minSum = nums[0]
  let curMaxSum = 0
  let curMinSum = 0

  for (let n of nums) {
    curMaxSum = Math.max(curMaxSum + n, n)
    curMinSum = Math.min(curMinSum + n, n)
    maxSum = Math.max(maxSum, curMaxSum)
    minSum = Math.min(minSum, curMinSum)
    // console.log(curMaxSum, curMinSum, maxSum, minSum)
  }

  return maxSum < 0
    ? maxSum
    : Math.max(maxSum, nums.reduce((a, b) => a + b) - minSum)
}

const nums = [5, -3, 5]
console.log(maxSubarraySumCircular(nums))
