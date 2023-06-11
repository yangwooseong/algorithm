/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let smallerPart = new ListNode(0, null)
  const ans = smallerPart
  let biggerPart = new ListNode(0, null)
  const tmp = biggerPart

  while (head) {
      if (head.val < x) {
          smallerPart.next = new ListNode(head.val, null)
          smallerPart = smallerPart.next
      } else {
          biggerPart.next = new ListNode(head.val, null)
          biggerPart = biggerPart.next
      }

      head = head.next
  }

  smallerPart.next = tmp.next

  return ans.next
};