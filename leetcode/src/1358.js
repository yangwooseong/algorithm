/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const obj = {
    a: 0,
    b: 0,
    c: 0,
  }

  let left = 0
  let ans = 0
  for (let right = 0; right < s.length; right++) {
    obj[s[right]] += 1
    while (obj.a * obj.b * obj.c) {
      ans += s.length - right
      obj[s[left]] -= 1
      left += 1
    }
  }

  return ans
}

const s = 'aaacb'

numberOfSubstrings(s)
