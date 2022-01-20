let lengthOfLongestSubstring = (s) => {
  let max = 0
  let left = 0
  const substringSet = new Set()
  for (let i = 0; i < s.length; i++) {
    while (substringSet.has(s[i])) {
      substringSet.delete(s[left])
      left += 1
    }
    substringSet.add[s[i]]
    max = Math.max(max, substringSet.size)
  }

  return max
}
