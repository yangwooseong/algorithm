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
var deleteDuplicates = function(head) {
  if (!head) { return null }
  if (!head.next || head.val !== head.next.val) { 
      head.next = deleteDuplicates(head.next)
      return head
  }

  const headVal = head.val

  while (head && head.val === headVal) {
      head = head.next
  }

  return deleteDuplicates(head)
};