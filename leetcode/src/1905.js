/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const ROW = grid2.length
  const COL = grid2[0].length

  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const dfs = (i, j) => {
      grid2[i][j] = 0
      let res = true
      for (const dir of dirs) {
          const ni = i + dir[0]
          const nj = j + dir[1]

          if (ni === -1 || ni === ROW || nj === -1 || nj === COL || !grid2[ni][nj]) { continue }
          if (!grid1[ni][nj]) { res = false }
          if (!dfs(ni, nj)) {
              res = false
          }

      }

      return res
  }

  let ans = 0

  for (let i=0;i<ROW;i++) {
      for (let j=0;j<COL;j++) {
          if (grid1[i][j] && grid2[i][j] && dfs(i,j)) { 
              ans += 1 
          }
      }
  }

  return ans
};