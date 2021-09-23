var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString()
console.log(input)
function numOfCutBars(bar) {
  let num = 0
  let arr = bar.split('')
  let stack = []
  arr.forEach((val, idx) => {
    if (val === '(') {
      stack.push(val)
    } else if (val === ')') {
      stack.pop()
      if (stack[stack.length - 1] === '(') {
        num = num + stack.length
      } else if (stack[stack.length - 1] === ')') {
        num = num + 1
      }
    }
  })
  return num
}

console.log(numOfCutBars(input))
