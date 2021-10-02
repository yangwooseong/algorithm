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
  while(head.length >= 2) {
      const a = head.shift()
      const b = head.pop()
      console.log(a, b)
      if(a !== b) return false
  }
  return true
};

isPalindrome([1,2,2,1])