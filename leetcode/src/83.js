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
var deleteDuplicates = function (head) {
  if (!head) return null

  let prev = null
  let cur = head

  while (cur) {
    console.log(prev, cur)
    if (prev && prev.val === cur.val) {
      prev.next = cur.next
    } else {
      prev = cur
    }
    cur = cur.next
  }
  return head
}
