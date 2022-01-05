function solution(N, number) {
  let answer = -1
  const DP = []

  for (let i = 1; i <= 8; i++) {
    const set = new Set()
    DP.push(set.add(String(N).repeat(i) * 1))
  }

  for (let i = 0; i < 8; i++) {
    // N을 1번 사용하는 경우부터 조사
    for (let j = 0; j < i; j++) {
      // DP[0] ~ DP[i - j - 1] 까지 탐색
      for (const v1 of DP[j]) {
        // DP[j]는 항상 DP[0]부터 시작
        for (const v2 of DP[i - j - 1]) {
          // v1과 v2는 해당 인덱스에 담긴 집합들 각각의 값을 의미
          cal(DP[i], v1, v2)
        }
      }
    }
    if (DP[i].has(number)) {
      answer = i + 1
      break
    }
  }

  return answer
}

const add = (a, b) => {
  return a + b
}
const sub = (a, b) => {
  return a - b
}
const mul = (a, b) => {
  return a * b
}
const div = (a, b) => {
  if (b === 0) return 0
  return Math.floor(a / b)
}
const addDP = (DP, res) => {
  DP.add(res)
}
const cal = (DP, a, b) => {
  addDP(DP, add(a, b))
  addDP(DP, sub(a, b))
  addDP(DP, mul(a, b))
  addDP(DP, div(a, b))
}

console.log(solution(1, 1))
