/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false)
  dp[s.length] = true

  for (let i = s.length; i > -1; i--) {
    // console.log(i, s.slice(i - word.length, i))
    for (const word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        console.log(s.slice(i, i + word.length), i)
        dp[i] = dp[i + word.length] || dp[i]
        console.log(dp)
      }
    }
  }

  return dp[0]
}

let s = 'cars'
let wordDict = ['car', 'ca', 'rs']

wordBreak(s, wordDict)
