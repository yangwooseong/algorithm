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
 var oddEvenList = function(head) {
  if (!head) { return head }
  const tailOf = (node) => {
      let cur = node.next
      let step = 2
      while (cur && cur.next) {
          cur = cur.next
          step += 1
      }
      return [cur, step]
  }

  let [tail, length] = tailOf(head)
  let [originalTail] = tailOf(head)
  let ans = head
  let step = 1
  while (step <= Math.floor(length / 2)) {
      if (head.next) {
          tail.next = new ListNode(head.next.val)
          head.next = head.next.next
          head = head.next
          tail = tail.next
      }
      step += 1
  }
  return ans
};