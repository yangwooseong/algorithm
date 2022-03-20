// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
//   const dp = new Array(s.length + 1)
//     .fill(0)
//     .map((v) => new Array(t.length + 1).fill(false))
//   for (let i = 0; i < t.length + 1; i++) {
//     dp[0][i] = true
//   }
//   for (let i = 1; i < s.length + 1; i++) {
//     for (let j = 1; j < t.length + 1; j++) {
//       // console.log(s[i-1], t[j-1])
//       if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1]
//       else dp[i][j] = dp[i][j - 1]
//     }
//     // console.log(dp.slice())
//   }
//   return dp[s.length][t.length - 1]
// }

// solution from neetcode

var isSubsequence = (s, t) => {
  let i = 0
  let j = 0
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
      j++
    } else j++
  }
  return i === s.length
}

const s = 'abc'
const t = 'aaecbfc'
console.log(isSubsequence(s, t))
