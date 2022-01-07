function solution(n) {
  let answer = 0
  let x = 1
  let y = 2
  if (n == 1) return x

  for (let i = 0; i < n - 1; i++) {
    const z = x
    x = y
    y = (z + x) % 1000000007
    // console.log(x)
  }
  return x
}

solution(5)
