function solution(n) {
  let arr = new Array(n).fill([]).map((v, i) => new Array(i + 1).fill(0))
  let x = 0
  let y = 0

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ]

  step = 1
  arr[0][0] = 1

  while (step < ((n + 1) * n) / 2)
    for (const dir of dirs) {
      let [dx, dy] = dir
      nx = x + dx
      ny = y + dy
      while (0 <= nx && nx < n && 0 <= ny && ny < n && !arr[nx][ny]) {
        arr[nx][ny] = arr[x][y] + 1
        x = nx
        y = ny
        nx = nx + dx
        ny = ny + dy
        step += 1
      }
      if (step === ((n + 1) * n) / 2) break
    }

  let answer = arr.reduce((a, b) => [...a, ...b], [])
  console.log(answer)

  return answer
}

solution(6)
