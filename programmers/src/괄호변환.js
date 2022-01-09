function solution(p) {
  const checkIfValidParentheses = (p) => {
    const stack = []
    for (let i = 0; i < p.length; i++) {
      if (p[i] === ')') {
        if (stack.length && stack[stack.length - 1] === '(') {
          stack.pop()
        } else return false
      } else {
        stack.push(p[i])
      }
    }
    return true
  }

  if (checkIfValidParentheses(p)) return p

  const getRightParenthes = (p) => {
    if (p === '') return p
    let leftParenthes = 0
    let rightParenthes = 0

    for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') leftParenthes++
      else rightParenthes++

      if (leftParenthes === rightParenthes) {
        let u = p.slice(0, leftParenthes + rightParenthes)
        let v = p.slice(leftParenthes + rightParenthes)

        if (checkIfValidParentheses(u)) {
          return u + getRightParenthes(v)
        } else {
          let reversedU = ''
          for (let i = 1; i < u.length - 1; i++) {
            if (u[i] === '(') reversedU += ')'
            else reversedU += '('
          }

          return '(' + getRightParenthes(v) + ')' + reversedU
        }
      }
    }
  }

  const answer = getRightParenthes(p)
  return answer
}

console.log(solution(')('))
