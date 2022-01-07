function solution(s) {
  const zippedArr = []

  for (let i = 1; i < s.length / 2 + 1; i++) {
    let substr = ''
    let count = 1
    for (let j = 0; j < s.length; j += i) {
      const start = s.substring(j, j + i)
      const next = s.substring(j + i, j + i + i)

      if (start === next) {
        count += 1
      } else {
        if (count > 1) {
          substr += count + start
          count = 1
        } else {
          substr += start
        }
      }
    }
    zippedArr.push(substr.length)
  }

  return Math.min(...zippedArr)
}

solution('ababcdcdababcdcd')
