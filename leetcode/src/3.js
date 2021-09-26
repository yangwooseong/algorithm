/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  max = 0
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    for (let j = i + 1; j < s.length; j++) {
      if (!cur.includes(s[j])) {
        cur = cur + s[j]
      } else {
        break
      }
    }
    max = max < cur.length ? cur.length : max
  }
  return max
}

let s = 'ayyubccdefg'

console.log(lengthOfLongestSubstring(s))
