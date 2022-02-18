/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length === 1) return 0
  const days = prices.length
  const buy = new Array(days)
  const sell = new Array(days)
  buy[0] = -prices[0]
  sell[0] = 0
  for (let i = 1; i < days; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i])
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee)
    console.log(buy.slice())
    console.log(sell.slice())
  }
}
const prices = [1, 3, 2, 8, 4, 9]
const fee = 2
maxProfit(prices, fee)
