/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const arr = [0, ...Array.from(new Set(nums.sort((a, b) => a - b)))]
  const obj = {}
  for (let n of nums) {
    obj[n] = obj[n] ? obj[n] + 1 : 1
  }
  const dp = new Array(arr.length).fill(0)
  // add one more zero for convenience
  dp[1] = arr[1] * obj[arr[1]]
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      dp[i] = Math.max(dp[i - 1], arr[i] * obj[arr[i]] + dp[i - 2])
    } else {
      dp[i] = dp[i - 1] + arr[i] * obj[arr[i]]
    }
    console.log(dp.slice())
  }
  return Math.max(dp[dp.length - 1], dp[dp.length - 2])
}

const nums = [2, 3, 4]
deleteAndEarn(nums)
