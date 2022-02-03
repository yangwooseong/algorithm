function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  console.log(intervals)
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false
  }
  return true
}

const intervals = [
  [5, 8],
  [9, 15],
]
console.log(canAttendMeetings(intervals))
