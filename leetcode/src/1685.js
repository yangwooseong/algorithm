/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let leftSum = 0
  let rightSum = 0
  const ans = []
  const sum = nums.reduce((a, b) => a + b)
  for (let i = 0; i < nums.length; i++) {
    const temp = leftSum
    leftSum += nums[i]
    rightSum = sum - temp - nums[i]
    ans.push(rightSum - temp - (nums.length - i - 1) * nums[i] + i * nums[i])
  }
  return ans
}
