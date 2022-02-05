/**
 * @param {string} s
 * @return {string}
 */
// my solution
// var minRemoveToMakeValid = function (s) {
//   let ans = ''
//   let leftP = 0
//   let remainingRightP = s.split('').filter((v) => v === ')').length

//   for (let c of s) {
//     if (!['(', ')'].includes(c)) {
//       ans += c
//     } else if (c === '(') {
//       if (remainingRightP > 0 && leftP < remainingRightP) {
//         leftP += 1
//         ans += c
//       }
//     } else if (c === ')') {
//       if (leftP > 0) {
//         ans += c
//         leftP -= 1
//       }
//       remainingRightP -= 1
//     }
//     console.log(ans)
//   }
//   return ans
// }
// const s = '(a(b(c)d)'
// minRemoveToMakeValid(s)

// easier solution
let minRemoveToMakeValid = (s) => {
  let arr = s.split('')
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i)
    } else if (arr[i] === ')') {
      if (stack.length) stack.pop()
      else arr[i] = ''
    }
  }
  while (stack.length) {
    arr[stack.pop()] = ''
  }
  return arr.join('')
}
