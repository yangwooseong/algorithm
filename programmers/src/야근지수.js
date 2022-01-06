function solution(n, works) {
  works.sort((a, b) => b - a)

  while (n) {
    const max = works[0]
    if (!max) break
    for (let i = 0; i < works.length; i++) {
      if (works[i] === max) {
        works[i] -= 1
        n -= 1
      }
      if (!n) break
    }
  }
  return works.reduce((a, b) => a + b * b, 0)
}

solution(3, [1, 1])
