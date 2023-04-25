/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  const arr = []
  const dfs = (node) => {
      if (!node) { 
          arr.push('n') 
          return
      }
      else { 
          arr.push(node.val) 
      }

      dfs(node.left)
      dfs(node.right)
  }

  dfs(root)

  return arr.join(',')
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  let idx = 0

  data = data.split(',')
  const dfs = () => {
      if (data[idx] === 'n') { 
          idx += 1 
          return null 
      }

      const node = new TreeNode(data[idx])
      idx += 1
      node.left = dfs()
      node.right = dfs()
      return node
  }

  return dfs()
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/