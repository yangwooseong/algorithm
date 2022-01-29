/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  let stack = []
  let max = BigInt(0)
  for (let i = 0; i < nums.length; i++) {
    stack = [[10 ** 7, 0]] // [min, sum]
    for (let j = i; j < nums.length; j++) {
      if (stack && stack[stack.length - 1][0] > nums[j]) {
        stack[stack.length - 1][0] = nums[j]
      }

      stack[stack.length - 1][1] += nums[j]
      const [min, sum] = stack[stack.length - 1]
      max = max > BigInt(min * sum) ? max : BigInt(min * sum)
    }
  }
  return Number(max % BigInt(10 ** 9 + 7))
}

// O(n^2), time limit error

const nums = [2, 3, 3, 1, 2]
maxSumMinProduct(nums)
