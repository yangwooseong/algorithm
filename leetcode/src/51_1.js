/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const ans = []

  const isDiagonal = (num1, idx1, num2, idx2) => Math.abs(num1 - num2) === Math.abs(idx1 - idx2)

  const toChessRow = (v) => new Array(n).fill(".").map((_, i) => i === v ? "Q" : ".").join('')

  const dfs = (arr) => {
      if (arr.length === n) { 
          ans.push(arr.map(toChessRow))
          return
      }
      for (let i=0;i<n;i++) {
          if (arr.every((v, idx) => v !== i && !isDiagonal(v, idx, i, arr.length))) {
              arr.push(i)
              dfs(arr)
              arr.pop()
          }
      }
  }

  dfs([])
  console.log("LOG: ", ans)
  return ans
};