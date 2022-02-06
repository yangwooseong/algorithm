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
 * @return {number[][]}
 */
let pathSum = (root, targetSum) => {
  const ans = []
  const recursion = (node, path, target) => {
    if (!node) return
    path.push(node.val)
    target -= node.val

    if (target === 0 && !node.left && !node.right) {
      ans.push(path.slice())
      return
    }
    if (node.left) {
      recursion(node.left, path, target)
      path.pop()
    }
    if (node.right) {
      recursion(node.right, path, target)
      path.pop()
    }
  }

  recursion(root, [], targetSum)
  return ans
}
