/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  const dp = {}
  words = words.sort((a, b) => a.length - b.length)
  for (let word of words) {
    dp[word] = 1
    for (let i = 0; i < word.length; i++) {
      const missingWord = word.slice(0, i) + word.slice(i + 1, word.length)
      if (dp[missingWord]) {
        dp[word] = Math.max(dp[word], dp[missingWord] + 1)
      }
    }
  }
  return Math.max(...Object.values(dp))
}
