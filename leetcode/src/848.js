let shiftingLetters = (s, shifts) => {
  for (let i = shifts.length - 2; i > -1; i--) {
    shifts[i] = (shifts[i] + shifts[i + 1]) % 26
  }
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  let ans = ''
  let idx = 0
  for (let i = 0; i < s.length; i++) {
    idx = alphabets.indexOf(s[i])
    ans += alphabets[(idx + shifts[i]) % 26]
    console.log(ans)
  }
  return ans
}

const s = 'abc'
const shifts = [3, 5, 9]
shiftingLetters(s, shifts)
