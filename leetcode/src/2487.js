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

 var removeNodes = function (head) {
  if (!head) { return null }
  head.next = removeNodes(head.next)
  return head.next && head.val < head.next.val ? head.next : head
}
// var removeNodes = function(head) {
//     const stack = []
//     let cur = head

//     while (cur) {
//         while (stack.length && stack.at(-1) < cur.val) {
//             stack.pop()
//         }
//         stack.push(cur.val)
//         cur = cur.next
//     }

//     let res = new ListNode(0, null)
//     const ans = res
//     for (const val of stack) {
//         res.next = new ListNode(val, null)
//         res = res.next
//     }
  
//     return ans.next
// };