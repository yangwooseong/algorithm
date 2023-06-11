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
    var recoverTree = function(root) {
      const arr = []
      const inOrder = (node) => {
          if (!node) { return }
  
          inOrder(node.left)
          arr.push(node.val)
          inOrder(node.right)
      }
  
      inOrder(root)
      arr.sort((a, b) => a - b)
  
      let idx = 0
      const recover = (node) => {
          if (!node) { return }
  
          recover(node.left)
          if (arr[idx] !== node.val) { node.val = arr[idx] }
          idx += 1
          recover(node.right)
      }
  
      recover(root)
  
      return root
  };