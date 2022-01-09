/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let found = false
  const dfs = (currentTree, sum) => {
    sum += currentTree.val
    if (!currentTree.left && !currentTree.right && sum === targetSum) {
      found = true
    }
    currentTree.left && dfs(currentTree.left, sum)
    currentTree.right && dfs(currentTree.right, sum)
    sum -= currentTree.val
  }

  if (!root) return false
  dfs(root, 0)
  // console.log(found)
  return found
}
