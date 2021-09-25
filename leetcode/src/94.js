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
var inorderTraversal = function (root) {
  let res = []
  inorderTraversal(root)
  // console.log(res)
  return res

  function inorderTraversal(node) {
    if (!node) return
    inorderTraversal(node.left)
    res.push(node.val)
    inorderTraversal(node.right)
  }
}

var inorderTraversal = function (root) {
  let res = [],
    stack = []
  if (!root) return []
  stack.push(root)
  while (stack.length) {
    let cur = stack[stack.length - 1]
    if (cur.left) {
      stack.push(cur.left)
      cur.left = null
    } else {
      res.push(stack.pop().val)
      cur.right && stack.push(cur.right)
    }
  }
  return res
}
