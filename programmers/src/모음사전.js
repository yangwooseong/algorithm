function solution(word) {
  let answer = 0
  let found = false
  const arr = ['A', 'E', 'I', 'O', 'U']
  const dfs = (current) => {
    if (current.join('') === word) found = true
    if (!found) answer += 1
    if (current.length === 5) return

    for (let i = 0; i < arr.length; i++) {
      current.push(arr[i])
      dfs(current)
      current.pop()
    }
  }

  dfs([])
  return answer
}

solution1('AAAAE')
