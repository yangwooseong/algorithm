/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
  const n = arr.length 
  const dp = new Array(n+1).fill(0).map(v => new Array(2).fill(0))
  const mod = 10**9 + 7

  for (let i=0;i<n;i++) {
      if (arr[i] % 2 === 0) {
          dp[i+1][0] = dp[i][0]
          dp[i+1][1] = dp[i][1] + 1
      } else {
          dp[i+1][0] = dp[i][1] + 1
          dp[i+1][1] = dp[i][0]
      }
      dp[i+1][0] %= mod
      dp[i+1][1] %= mod
  }

  return dp.reduce((acc, cur) => (acc + cur[0]) % mod, 0)
};