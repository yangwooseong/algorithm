/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const arr = new Array(26).fill(0)
  for (let c of s) {
    arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
  }
  let answer = ''
  let last = null
  // console.log(arr.slice())
  for (let j = 0; j < s.length; j++) {
    let max = -Infinity
    let temp = -1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] > max && i !== last) {
        max = arr[i]
        temp = i
      }
    }
    if (temp === -1) return ''
    last = temp
    arr[last] -= 1
    answer += String.fromCharCode(last + 'a'.charCodeAt())
    // console.log(answer, last, arr.slice())
  }
  return answer
}

console.log(reorganizeString('aaabbcc'))
