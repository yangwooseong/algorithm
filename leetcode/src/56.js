/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })

  let merged_intervals = []

  for (let i = 0; i < intervals.length; i++) {
    let merged = false
    for (let j = 0; j < merged_intervals.length; j++) {
      if (
        merged_intervals[j][0] <= intervals[i][0] &&
        intervals[i][0] <= merged_intervals[j][1]
      ) {
        merged_intervals[j][1] = Math.max(
          intervals[i][1],
          merged_intervals[j][1],
        )
        merged = true
        break
      }
    }
    if (!merged) {
      merged_intervals.push(intervals[i])
    }
    // console.log(merged_intervals.slice())
  }
  return merged_intervals
}

merge([
  [1, 4],
  [0, 2],
  [3, 5],
])
