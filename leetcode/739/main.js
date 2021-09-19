/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = []
  let result = new Array(temperatures.length)
  result.fill(0)
  temperatures.forEach((val, idx) => {
    while (idx !== 0 && temperatures[stack.slice(-1)] < val) {
      result[stack.slice(-1)] = idx - stack.slice(-1)
      stack.pop()
    }
    stack.push(idx)
  })

  return result
}

let t

t = [73, 74, 75, 71, 69, 72, 76, 73]
console.assert(
  JSON.stringify([1, 1, 4, 2, 1, 1, 0, 0]) ===
    JSON.stringify(dailyTemperatures(t))
)

t = [30, 40, 50, 60]
console.assert(
  JSON.stringify([1, 1, 1, 0]) === JSON.stringify(dailyTemperatures(t))
)

t = [30, 60, 90]
console.assert(
  JSON.stringify([1, 1, 0] === JSON.stringify(dailyTemperatures(t)))
)
