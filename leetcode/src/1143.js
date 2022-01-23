/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const row = text1.length
  const col = text2.length
  const dp = new Array(row + 1)
    .fill([])
    .map((item) => new Array(col + 1).fill(0))

  // for (let i = 0; i < col; i++) {
  //   if (text1[0] === text2[i]) {
  //     dp[0][i] = 1
  //     for (let j = i; j < col; j++) {
  //       dp[0][j] = 1
  //     }
  //     break
  //   }
  // }

  // for (let i = 0; i < row; i++) {
  //   if (text2[0] === text1[i]) {
  //     dp[i][0] = 1
  //     for (let j = i; j < row; j++) {
  //       dp[j][0] = 1
  //     }
  //     break
  //   }
  // }

  for (let i = 1; i < row + 1; i++) {
    for (let j = 1; j < col + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  console.log(dp)
  return dp[row - 1][col - 1]
}

const text1 = 'bsbininm'
const text2 = 'jmjkbkjkv'

longestCommonSubsequence(text1, text2)
