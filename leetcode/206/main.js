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
// var reverseList = function (head) {
//   let rev = null
//   let cur = head
//   while (cur) {
//     let next = cur.next
//     cur.next = rev
//     rev = cur
//     cur = next
//   }
//   return rev
// }

var reverseList = function (head) {
  const reverse = (leftNode, rev = null) => {
    if (!leftNode) return rev
    let next = leftNode.next
    leftNode.next = rev
    return reverse(next, leftNode)
  }
  return reverse(head)
}
