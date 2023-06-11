/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => a[0] - a[1] - b[0] + b[1])
  return costs.reduce((acc, cur, idx) => 
      idx < costs.length / 2 ? acc + cur[0] : acc + cur[1]
  , 0)
};