/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  const queue = []
  const ops = new Set(['+', '-', '*', '/'])

  const res = (_l, _r, op) => {
      const l = parseInt(_l)
      const r = parseInt(_r)
      if (op === '-') { return l - r }
      if (op === '+') { return l + r }
      if (op === '*') { return l * r }
      if (op === '/') { return l / r > 0 ? Math.floor(l/r) : Math.ceil(l/r) }
  }

  for (const token of tokens) {
      if (ops.has(token)) {
          const r = queue.pop()
          const l = queue.pop()
          queue.push(res(l, r, token))
      } else {
          queue.push(token)
      }

      // console.log("LOG: ", queue.slice())
  }

  return queue.pop()
};