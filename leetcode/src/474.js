/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
  const zeroAndOne = (str) => {
      const zero =  str.split('').filter(v => v === '0').length
      const one = str.length - zero
      return [zero, one]
  }

  for (const str of strs) {
      for (let i=m;i>-1;i--) {
          for (let j=n;j>-1;j--) {
              const [zero, one] = zeroAndOne(str)
              if (i < zero || j < one) { continue }
              dp[i][j] = Math.max(dp[i][j], (dp[i-zero]?.[j-one] ?? 0) + 1)
          }
      }
  }

  return dp[m][n]
};