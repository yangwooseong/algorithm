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
 * @return {number[]}
 */
// var preorderTraversal = function (root) {
//   let res = []
//   preorderTraversal(root)
//   return res

//   function preorderTraversal(node) {
//     if (!node) return
//     res.push(node.val)
//     preorderTraversal(node.left)
//     preorderTraversal(node.right)
//   }
// }

var preorderTraversal = function (root) {
  if (!root) return []
  let stack = [],
    res = []
  stack.push(root)

  while (stack.length !== 0) {
    let node = stack.pop()
    res.push(node.val)

    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return res
}
