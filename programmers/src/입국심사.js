function solution(n, times) {
  const maxTime = Math.max(...times)
  let max = maxTime * n
  let min = 1
  let mid

  while (min <= max) {
    mid = Math.floor((max + min) / 2)
    const sum = times.reduce((a, b) => (a += Math.floor(mid / b)), 0)

    if (sum >= n) max = mid - 1
    else min = mid + 1
  }

  return min
}

solution(6, [7, 10])
