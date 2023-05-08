/**
 * @param {string[]} operations
 * @return {number}
 */
 var calPoints = function(operations) {
  const stack = []

  const notIntegers = new Set(['+', 'D', 'C'])

  for (const op of operations) {
      if (!notIntegers.has(op)) {
          stack.push(parseInt(op))
          continue
      } 

      if (op === '+') {
          stack.push(stack.at(-1) + stack.at(-2))
      } else if (op === 'D') {
          stack.push(2 * stack.at(-1))
      } else if (op === 'C') {
          stack.pop()
      }
  }

  return stack.reduce((a, b) => a + b, 0)
};