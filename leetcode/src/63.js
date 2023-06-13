/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    const row = grid.length
    const col = grid[0].length
    const dp = new Array(row).fill(0).map(v => new Array(col).fill(0))

    for (let i=0;i<row;i++) {
        for (let j=0;j<col;j++) {
            if (!i && !j) {
                dp[i][j] = 1 - grid[0][0]
            } else if (grid[i][j]) {
                dp[i][j] = 0
            } else if (!i) {
                dp[i][j] = dp[i][j-1]
            } else if (!j) {
                dp[i][j] = dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }

    return dp[row-1][col-1]
};