/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
  const n1 = nums1.length
  const n2 = nums2.length
  const dp = new Array(n1+1).fill(0).map(() => new Array(n2+1).fill(0))

 for (let i=1;i<n1+1;i++) {
     for (let j=1;j<n2+1;j++) {
          if (nums1[i-1] === nums2[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }

          // console.log(dp)
     }
 }

  return dp[n1][n2]
};