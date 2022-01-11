/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let answer = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substring = s.slice(i, j + 1)
      if (substring === substring.slice().split('').reverse().join('')) {
        // console.log(substring)
        answer += 1
      }
    }
  }
  return answer
}

const s = 'aaa'
countSubstrings(s)

let solution = (s) => {
  let answer = 0
  for (let c = 0; c < s.length; c++) {
    let left = c
    let right = c
    while (0 <= left && right < s.length && s[left] === s[right]) {
      console.log(s.slice(left, right + 1))
      answer += 1
      left -= 1
      right += 1
    }
    left = c
    right = c + 1
    while (0 <= left && right < s.length && s[left] === s[right]) {
      console.log(s.slice(left, right + 1))
      answer += 1
      left -= 1
      right += 1
    }
  }
  return answer
}

solution(s)
