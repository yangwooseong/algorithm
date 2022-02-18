/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const dp = new Array(days[366])
  dp[0] = 0

  for (let day = 1; day <= days[days.length - 1]; day++) {
    if (!days.includes(day)) {
      dp[day] = dp[day - 1]
      continue
    } else {
      dp[day] = Math.min(
        dp[day - 1] + costs[0],
        dp[Math.max(0, day - 7)] + costs[1],
        dp[Math.max(0, day - 30)] + costs[2],
      )
    }
  }
  return dp[dp.length - 1]
}

const days = [
  1, 2, 3, 4, 6, 8, 9, 10, 13, 14, 16, 17, 19, 21, 24, 26, 27, 28, 29,
]
const costs = [3, 14, 50]
mincostTickets(days, costs)
