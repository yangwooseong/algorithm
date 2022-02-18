/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let ans = 0
  let i = 0
  while (i < colors.length - 1) {
    let maxIndex = i
    ans += neededTime[i]
    while (colors[i] === colors[i + 1]) {
      if (neededTime[maxIndex] < neededTime[i + 1]) {
        maxIndex = i + 1
      }
      i += 1
      ans += neededTime[i]
    }
    i += 1
    ans -= neededTime[maxIndex]
  }
  return ans
}

// const colors = 'abaac'
// const neededTime = [1, 2, 3, 4, 5]
// minCost(colors, neededTime)
