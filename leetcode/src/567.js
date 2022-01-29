/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let m = new Map()
  for (const c of s1) {
    m.set(c, m.get(c) + 1 || 1)
  }

  let left = 0
  let count = m.size

  for (let right = 0; right < s2.length; right++) {
    const c = s2[right]
    if (m.has(c)) m.set(c, m.get(c) - 1)
    if (m.get(c) === 0) count -= 1
    console.log(m, c, count)
    while (count === 0) {
      if (right - left + 1 === s1.length) return true
      if (m.has(s2[left])) m.set(s2[left], m.get(s2[left]) + 1)
      if (m.get(s2[left]) === 1) count += 1
      left += 1
    }
  }
  return false
}

const s1 = 'ab'
const s2 = 'aidboabo'
checkInclusion(s1, s2)
