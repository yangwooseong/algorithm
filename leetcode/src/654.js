/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null
  const max = Math.max(...nums)
  const leftSubTree = constructMaximumBinaryTree(
    nums.slice(0, nums.indexOf(max)),
  )
  const rightSubTree = constructMaximumBinaryTree(
    nums.slice(nums.indexOf(max) + 1),
  )
  return new TreeNode(max, leftSubTree, rightSubTree)
}
