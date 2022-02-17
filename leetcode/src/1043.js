/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const l = arr.length
  const dp = new Array(l + 1).fill(0)

  for (let i = 0; i < l + 1; i++) {
    let curMax = 0
    for (let j = 1; j < Math.min(k, i) + 1; j++) {
      curMax = Math.max(curMax, arr[i - j])
      dp[i] = Math.max(dp[i], dp[i - j] + curMax * j)
    }
    console.log(dp.slice(), curMax)
  }
  return dp[dp.length - 1]
}

const arr = [1, 15, 7, 9, 2, 5, 10]
const k = 3
maxSumAfterPartitioning(arr, k)
