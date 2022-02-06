let countHomogenous = (s) => {
  let cur = ''
  let n = 0
  let ans = 0
  for (let c of s) {
    if (c !== cur) {
      ans = (ans + (n * (n + 1)) / 2) % (10 ** 9 + 7)
      n = 1
      cur = c
    } else {
      n += 1
    }
    console.log(ans, n)
  }
  ans = (ans + (n * (n + 1)) / 2) % (10 ** 9 + 7)
  return ans
}

const s = 'abbcccaa'
countHomogenous(s)
