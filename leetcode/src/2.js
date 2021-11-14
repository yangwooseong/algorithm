/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let cur = new ListNode()
  let head = cur
  let carry = 0

  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0
    const l2Val = l2 ? l2.val : 0
    let sum = l1Val + l2Val + carry
    carry = sum >= 10 ? 1 : 0

    if (l1) {
      l1.val = sum % 10
      cur.next = l1
    } else {
      l2.val = sum % 10
      cur.next = l2
    }
    cur = cur.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    cur.next = new ListNode(1)
  }
  return head.next
}
