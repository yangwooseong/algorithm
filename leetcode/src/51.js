/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const answer = []

  const isPossible = (arr, idxToAdd) => {
    if (arr.includes(idxToAdd)) return false

    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(i - arr.length) === Math.abs(arr[i] - idxToAdd)) return false
    }
    return true
  }

  const dfs = (current) => {
    if (current.length === n) {
      const board = current.map((item) => {
        const arr = new Array(n).fill('.')
        arr[item] = 'Q'
        return arr.join('')
      })
      answer.push(board)
      return
    }

    for (let i = 0; i < n; i++) {
      if (isPossible(current, i)) {
        current.push(i)
        dfs(current)
        current.pop()
      }
    }
  }

  dfs([])
  console.log(answer)
  return answer
}

solveNQueens(4)
