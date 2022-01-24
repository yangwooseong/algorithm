let characterReplacement = (s, k) => {
  count = {}
  let left = 0
  let res = 0

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = count[s[right]] ? count[s[right]] + 1 : 1
    if (right - left + 1 - Math.max(...Object.values(count)) > k) {
      count[s[left]] -= 1
      left += 1
    }

    res = Math.max(res, right - left + 1)
    console.log(left, right, count)
  }
  return res
}

const s = 'AABABBA'
const k = 1
characterReplacement(s, k)
