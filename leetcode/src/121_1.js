var maxProfit = function (prices) {
  let minPrice = null
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    minPrice = minPrice === null ? prices[i] : Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    console.log(maxProfit, minPrice, i)
  }

  return maxProfit
}
