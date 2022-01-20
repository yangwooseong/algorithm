let coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < amount + 1; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
const coins = [1, 2, 5]
const amount = 11

coinChange(coins, amount)
