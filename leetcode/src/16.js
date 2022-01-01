/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ans = 10 ** 5
  let min = 10 ** 5

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const threeSum = nums[i] + nums[j] + nums[k]
        if (Math.abs(threeSum - target) < min) {
          ans = threeSum
          min = Math.abs(threeSum - target)
        }
        console.log(i, j, k, ans, min)
      }
    }
  }
  return ans
}

threeSumClosest([-1, 2, 1, -4], 1)
