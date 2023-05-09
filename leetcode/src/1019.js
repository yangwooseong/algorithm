/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

 var nextLargerNodes = function(head) {
  const res = []
  const stack = [] // Array<[idx, value]>

  while (head) {
      while (stack.length && stack[stack.length-1][1] < head.val) {
          res[stack.pop()[0]] = head.val
      }

      stack.push([res.length, head.val])
      res.push(0)
      head = head.next
  }

  return res
};