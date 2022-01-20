var StockSpanner = function () {
  this.stack = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1
  while (this.stack && this.stack[this.stack.length - 1].price <= price) {
    span += this.stack.pop().span
  }

  this.stack.push({ price, span })
  return span
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
