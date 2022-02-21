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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  const answer = []
  while (queue.length) {
    answer.push(queue.map((n) => n.val))
    const nextQueue = []
    for (let q of queue) {
      if (q.left) nextQueue.push(q.left)
      if (q.right) nextQueue.push(q.right)
    }
    queue = nextQueue
  }
  return answer
}
