/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0
  for (let i = 0; i < prices.length - 1; i++) {
    ans += Math.max(0, prices[i + 1] - prices[i])
  }
  return ans
}
