/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => {
      if (a[0] === b[0]) { return b[1] - a[1] }
      return a[0] - b[0]
  })

  let cur = 0
  let ans = 0

  for (const interval of intervals) {
      if (cur < interval[1]) {
          cur = interval[1]
          ans += 1
      }
  }

  return ans
};