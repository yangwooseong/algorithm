function solution(n, results) {
  const dp = new Array(n).fill().map((_) => new Array(n).fill(false))
  for (const res of results) {
    dp[res[0] - 1][res[1] - 1] = true
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dp[i][k] && dp[k][j]) {
          dp[i][j] = true
        }
      }
    }
  }

  let answer = 0
  for (let i = 0; i < n; i++) {
    let count = 0
    for (let j = 0; j < n; j++) {
      if (dp[i][j] || dp[j][i]) count += 1
    }
    if (count === n - 1) answer += 1
  }

  // console.log(answer)
  return answer
}

solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
])
