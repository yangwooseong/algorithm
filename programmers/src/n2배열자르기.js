function solution(n, left, right) {
  answer = []
  for (let i = left; i < right + 1; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1)
  }
  return answer
}

solution(3, 2, 5)
