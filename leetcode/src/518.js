/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = 1; i < amount + 1; i++) {
      if (i - coin >= 0) {
        dp[i] += dp[i - coin]
      }
    }
    console.log(dp.slice())
  }
  return dp
}

const amount = 5
const coins = [1, 2, 5]
change(amount, coins)
