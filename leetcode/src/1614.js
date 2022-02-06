let maxDepth = (s) => {
  let ans = 0
  let left = 0
  for (let c of s) {
    if (c === '(') {
      left += 1
      ans = Math.max(ans, left)
    } else if (c === ')') {
      left -= 1
    }
  }
  return ans
}
