let longestPalindrome = (s) => {
  const m = new Map()
  for (let c of s) {
    m.set(c, m.get(c) + 1 || 1)
  }
  let isOdd = false
  let ans = 0
  for (let v of m.values()) {
    ans += 2 * Math.floor(v / 2)
    if (v % 2) isOdd = true
  }
  return isOdd ? ans + 1 : ans
}
