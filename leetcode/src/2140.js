/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const dp = {}
  const n = questions.length

  for (let i = n - 1; i > -1; i--) {
    const [point, brainPoint] = questions[i]
    dp[i] = Math.max((dp[i + brainPoint + 1] ?? 0) + point, dp[i + 1] ?? 0)
  }

  return Object.values(dp).reduce((a, b) => Math.max(a, b))
};