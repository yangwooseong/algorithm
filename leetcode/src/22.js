let generateParenthesis = (n) => {
  const answer = []

  const dfs = (open, closed, current) => {
    if (open === n && closed === n) {
      console.log(current)
      answer.push(current.join(''))
      return
    }

    if (open < n) {
      current.push('(')
      dfs(open + 1, closed, current)
      current.pop()
    }

    if (open > closed) {
      current.push(')')
      dfs(open, closed + 1, current)
      current.pop()
    }
  }

  dfs(0, 0, [])
  console.log(answer)
  return answer
}

generateParenthesis(3)
