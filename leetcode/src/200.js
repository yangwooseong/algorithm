/**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function (grid) {
//   let islands = 0
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === '1') {
//         searchIsland(i, j)
//         islands = islands + 1
//       }
//     }
//   }

//   return islands

//   function searchIsland(i, j) {
//     if (
//       i < 0 ||
//       i >= grid.length ||
//       j < 0 ||
//       j >= grid[0].length ||
//       grid[i][j] === '0'
//     )
//       return

//     grid[i][j] = '0'
//     searchIsland(i + 1, j)
//     searchIsland(i, j + 1)
//     searchIsland(i - 1, j)
//     searchIsland(i, j - 1)
//   }
// }
