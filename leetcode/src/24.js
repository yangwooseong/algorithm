/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const helper = (node) => {
      if (!node || !node.next) { return node }

      let cur = node
      let next = cur.next

      cur.next = helper(next.next)
      next.next = cur

      return next 
  }

  return helper(head)
};