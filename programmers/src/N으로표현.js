function solution(N, number) {
  let dp = []
  for (let i = 1; i < 9; i++) {
    const set = new Set()
    dp.push(set.add(String(N).repeat(i) * 1))
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (const v1 of dp[j]) {
        for (const v2 of dp[i - j - 1]) {
          dp[i].add(v1 + v2)
          dp[i].add(v1 - v2)
          dp[i].add(v1 * v2)
          if (v2 !== 0) dp[i].add(Math.floor(v1 / v2))
        }
      }
    }
    if (dp[i].has(number)) return i + 1
  }

  return -1
}

console.log(solution(1, 1))
