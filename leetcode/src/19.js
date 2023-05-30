/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head)

  let right = dummy
  for (let i=0;i<n;i++) {
      right = right.next
  }
  let left = dummy

  while (right.next) {
      right = right.next
      left = left.next
  }

  left.next = left.next.next

  return dummy.next
};