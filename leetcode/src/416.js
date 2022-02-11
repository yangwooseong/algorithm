// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// Knapsack
// var canPartition = function (nums) {
//   let sum = nums.reduce((acc, cur) => acc + cur)
//   if (sum % 2 === 1) {
//     return false
//   }
//   sum /= 2

//   const dp = new Array(nums.length + 1)
//     .fill(0)
//     .map(() => new Array(sum + 1).fill(false))
//   for (let i = 0; i < nums.length + 1; i++) {
//     dp[i][0] = true
//   }

//   for (let i = 1; i < dp.length; i++) {
//     const val = nums[i - 1]
//     for (let j = 1; j < dp[i].length; j++) {
//       if (dp[i - 1][j] || (j >= val && dp[i - 1][j - val])) {
//         dp[i][j] = true
//       }
//     }
//   }
//   return dp[dp.length - 1][sum]
// }

// dp using set
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur)
  if (sum % 2 === 1) {
    return false
  }
  sum /= 2
  let dp = new Set([0])
  for (let n of nums) {
    const newDp = new Set(dp)
    for (let m of dp) {
      newDp.add(m + n)
    }
    // console.log(newDp)
    if (newDp.has(sum)) return true
    dp = newDp
  }
  return false
}

const nums = [1, 5, 11, 5]
canPartition(nums)
