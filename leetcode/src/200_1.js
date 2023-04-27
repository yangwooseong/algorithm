/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  const row = grid.length
  const col = grid[0].length

  const removeIsland = (x, y) => {
      const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

      for (const dir of dirs) {
          const nx = x + dir[0]
          const ny = y + dir[1]

          if (0 <= nx && nx < row && 0 <= ny && ny < col && grid[nx][ny] === '1') {
              grid[nx][ny] = '0'
              removeIsland(nx, ny)
          }
      }
  }

  let ans = 0

  for (let i=0;i<row;i++) {
      for (let j=0;j<col;j++) {
          if (grid[i][j] === '1') {
              ans += 1
              removeIsland(i, j)
          }
      }
  }
  return ans
};
