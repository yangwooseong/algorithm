let merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])
  const answer = [intervals[0]]

  for (let interval of intervals.slice(1)) {
    const [start, end] = interval
    const lastEnd = answer[answer.length - 1][1]

    if (start <= lastEnd) {
      answer[answer.length - 1][1] = Math.max(lastEnd, end)
    } else {
      answer.push(interval)
    }
    console.log(answer.slice())
  }
  return answer
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
merge(intervals)
