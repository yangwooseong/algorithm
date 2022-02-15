/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n % 2 === 0) return []
  const dp = { 0: [], 1: [new TreeNode()] }
  const backtracking = (n) => {
    if (dp[n]) return dp[n]
    const res = []
    for (let left = 0; left < n; left++) {
      const right = n - left - 1
      const leftTrees = backtracking(left)
      const rightTrees = backtracking(right)
      for (let t1 of leftTrees) {
        for (let t2 of rightTrees) {
          res.push(new TreeNode(0, t1, t2))
        }
      }
    }
    dp[n] = res
    return res
  }
  return backtracking(n)
}
