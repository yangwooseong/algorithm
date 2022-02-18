/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  let rightOddSum = nums
    .filter((v, i) => i % 2 === 1)
    .reduce((a, b) => a + b, 0)
  let rightEvenSum = nums
    .filter((v, i) => i % 2 === 0)
    .reduce((a, b) => a + b, 0)
  let leftOddSum = 0
  let leftEvenSum = 0
  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) rightOddSum -= nums[i]
    else rightEvenSum -= nums[i]
    // console.log(leftOddSum, leftEvenSum, rightOddSum, rightEvenSum)
    if (leftOddSum + rightEvenSum === leftEvenSum + rightOddSum) ans += 1
    if (i % 2) leftOddSum += nums[i]
    else leftEvenSum += nums[i]
  }
  return ans
}

const nums = [2, 1, 6, 4]
waysToMakeFair(nums)
