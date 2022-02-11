/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length + 1).fill(0)

  for (let i = triangle.length - 1; i > -1; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  console.log(dp)
  return Math.min(...dp)
}

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
minimumTotal(triangle)
