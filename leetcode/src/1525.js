const numSplits = (s) => {
  const rightM = new Map()
  const leftM = new Map()
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    rightM.set(s[i], rightM.get(s[i]) + 1 || 1)
  }

  for (let i = 0; i < s.length; i++) {
    leftM.set(s[i], leftM.get(s[i]) + 1 || 1)
    rightM.set(s[i], rightM.get(s[i]) - 1)
    if (rightM.get(s[i]) === 0) {
      rightM.delete(s[i])
    }
    if (leftM.size === rightM.size) ans += 1
  }
  return ans
}
