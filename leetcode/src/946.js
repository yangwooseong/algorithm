/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  let p1 = 0
  let p2 = 0
  while (p1 < pushed.length + 1) {
    while (p2 < popped.length && stack[stack.length - 1] === popped[p2]) {
      p2 += 1
      stack.pop()
    }
    if (p1 === pushed.length) break
    stack.push(pushed[p1])
    p1 += 1
  }
  return stack.length === 0
}
