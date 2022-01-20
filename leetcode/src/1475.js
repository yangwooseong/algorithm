const finalPrices = (prices) => {
  const stack = []
  const answer = prices.slice()
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      const popped = stack.pop()
      answer[popped] -= prices[i]
    }
    stack.push(i)
    // console.log(stack)
  }
  // console.log(answer)
  return answer
}

const prices = [8, 4, 6, 2, 3]
finalPrice(prices)
