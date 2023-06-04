/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  let dp = [0]
  
  for (stone of stones) {
      const newDp = Array.from(new Set(dp.map(v => [v + stone, v - stone]).flatMap(v => v)))
      dp = newDp
  }

  return dp.reduce((acc, cur) => Math.min(acc, Math.abs(cur)), Math.abs(dp[0]))
};