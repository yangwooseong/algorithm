/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  while (n > 1) {
      const nextQueue = []
      
      for (const num of queue) {
          const lastNum = num % 10
          if (0 <= lastNum - k) { nextQueue.push(num * 10 + lastNum - k)}
          if (k !== 0 && lastNum + k < 10) { nextQueue.push(num * 10 + lastNum + k) }
      }

      queue = nextQueue
      n -= 1
  }

  return queue
};