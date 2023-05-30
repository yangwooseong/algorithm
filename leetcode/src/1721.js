/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  const swap = (a, b) => {
      const tmp = a.val
      a.val = b.val
      b.val = tmp
  }

  let cur = head
  for (let i=0;i<k-1;i++) {
      cur = cur.next
  }

  let left = cur
  let right = head

  while (cur.next) {
      cur = cur.next
      right = right.next
  }

  swap(left, right)
  return head
};