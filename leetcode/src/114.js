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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 짱 신기하넹;;

var flatten = function (root) {
  let cur = root
  while (cur) {
    let leftChild = cur.left
    if (leftChild === null) {
      cur = cur.right
      continue
    }
    findMostRightNode(leftChild).right = cur.right
    cur.right = cur.left
    cur.left = null
    cur = cur.right
  }
  return cur

  function findMostRightNode(node) {
    while (node.right) {
      node = node.right
    }
    return node
  }
}
