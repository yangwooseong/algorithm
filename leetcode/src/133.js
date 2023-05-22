/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
  const copiedNodeMap = {}

  const copy = (node) => {
      if (!node) { return node }
      if (!copiedNodeMap[node.val]) {
          copiedNodeMap[node.val] = new Node(node.val)
          copiedNodeMap[node.val].neighbors = node.neighbors.map(copy)
      }

      return copiedNodeMap[node.val]
  }

  return copy(node)
};