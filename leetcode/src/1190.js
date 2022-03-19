/**
 * @param {string} s
 * @return {string}
 */
// iteration using stack
// var reverseParentheses = function (s) {
//   const stack = ['']
//   for (const c of s) {
//     if (c === '(') {
//       stack.push('')
//     } else if (c === ')') {
//       stack[stack.length - 2] += stack.pop().split('').reverse().join('')
//     } else {
//       stack[stack.length - 1] += c
//     }
//   }
//   return stack.join('')
// }

// solution using recursion
const reverseParentheses = (s) => {
  let begin = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      begin = i
    } else if (s[i] === ')') {
      end = i
      return reverseParentheses(
        s.slice(0, begin) +
          s
            .slice(begin + 1, end)
            .split('')
            .reverse()
            .join('') +
          s.slice(end + 1),
      )
    }
  }
  return s
}

const s = '(ed(et(oc))el)'
// const s = 'ab(cd)ef'
console.log(reverseParentheses(s))
