/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const checkLeft = (p, q) => {
    if (!p && q) return false
    if (p && !q) return false
    if (!p && !q) return true
    return (
      p.val === q.val &&
      checkLeft(p.left, q.left) &&
      checkLeft(p.right, q.right)
    )
  }
  return checkLeft(p, q)
}
