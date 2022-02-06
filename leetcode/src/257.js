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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const ans = []
  const dfs = (current, path) => {
    if (!current.left && !current.right) {
      ans.push(path + current.val)
      return
    }

    if (current.left) {
      dfs(current.left, path + current.val + '->')
    }
    if (current.right) {
      dfs(current.right, path + current.val + '->')
    }
  }

  dfs(root, '')
  return ans
}
