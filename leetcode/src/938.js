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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // let ans = 0
  // const inOrder = (node) => {
  //   if(!node) return
  //   inOrder(node.left)
  //   if(low <= node.val && node.val <= high) ans += node.val
  //   inOrder(node.right)
  // }
  // inOrder(root)
  // return ans

  // BST의 특성을 이용하면 모든 노드 조회안해도 됨..
  if (root == null) return 0 // base case.
  if (root.val < low) return rangeSumBST(root.right, low, high) // left branch excluded.
  if (root.val > high) return rangeSumBST(root.left, low, high) // right branch excluded.
  return (
    root.val +
    rangeSumBST(root.right, low, high) +
    rangeSumBST(root.left, low, high)
  ) // count in both children.
}
