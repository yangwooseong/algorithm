/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))

  for (let start=s.length;start>-1;start--) {
      for (let end=start;end<s.length;end++) {
          if (start === end) { 
              dp[start][end] = 1
          } else if (s[start] === s[end]) {
              dp[start][end] = dp[start+1][end-1] + 2
          } else {
              dp[start][end] = Math.max(dp[start+1][end], dp[start][end-1])
          }
      }
  }

  return dp[0][s.length-1]
};