function solution(n, s) {
  let answer = []
  if (n > s) return [-1]
  const answer = new Array(n).fill(Math.floor(s / n))
  for (let i = 0; i < s - n * Math.floor(s / n); i++) {
    answer[n - i - 1] += 1
  }
  return answer
}
