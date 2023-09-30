/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  const getMid = (node) => {
      let slow = node
      let fast = node
      while (fast && fast.next) {
          slow = slow.next
          fast = fast.next.next 
      }

      return slow
  }

  const getReverse = (node) => {
      let prev = null
      let cur = node

      while (cur) {
          const temp = cur.next
          cur.next = prev
          prev = cur
          cur = temp
      }

      return prev
  }

  const mid = getMid(head)
  let rev = getReverse(mid)

  while (rev && head.val === rev.val) {
      head = head.next
      rev = rev.next
  }

  return rev ? false : true
};