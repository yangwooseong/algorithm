function solution(n) {
  let answer = 0
  const dfs = (board, col) => {
    if (col === n) {
      answer += 1
      // console.log(board.slice())
    } else {
      for (let i = 1; i < n + 1; i++) {
        board[col + 1] = i
        if (isValid(board, col + 1)) dfs(board, col + 1)
      }
    }
  }

  const isValid = (board, col) => {
    for (let i = 1; i < col; i++) {
      if (board[i] === board[col]) return false
      if (Math.abs(i - col) === Math.abs(board[i] - board[col])) return false
    }
    return true
  }

  for (let i = 1; i < n + 1; i++) {
    const board = new Array(n + 1).fill(0)
    board[1] = i
    dfs(board, 1)
  }

  return answer
}

console.log(solution(4))
