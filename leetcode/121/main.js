/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   let minPrice = null
   let maxProfit = 0

   prices.forEach(price => {
     minPrice = minPrice !== null ? Math.min(minPrice, price) : price
     maxProfit = Math.max(maxProfit, price - minPrice)
   })
   return maxProfit
};

const arr = [7, 1, 5 ,3, 6, 4]
console.log(maxProfit(arr))