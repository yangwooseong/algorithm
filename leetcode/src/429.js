/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  const ans = []
  while (queue.length) {
    ans.push(queue.map((node) => node.val))
    const nextQueue = []
    for (let node of queue) {
      if (node !== null) {
        for (let n of node.children) {
          nextQueue.push(n)
        }
      }
    }
    queue = nextQueue
  }
  return ans
}
