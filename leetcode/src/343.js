let integerBreak = (n) => {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * dp[j], (i - j) * j)
    }
    // console.log(dp.slice())
  }
}

integerBreak(10)
