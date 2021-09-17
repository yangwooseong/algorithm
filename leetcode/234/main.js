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

//  var isPalindrome = function(head) {
//   let arr = [], node = head
//   while(node !== null) {
//     arr.push(node.val)
//     node = node.next
//   }
//   while(arr.length >= 2) {
//       const a = arr.shift()
//       const b = arr.pop()
//       if(a !== b) return false
//   }
//   return true
// };

// runner 를 이용한 풀이
// let tmp = slow
// tmp.next = rev
// rev = tmp
// slow = slow.next
// 가 안되는 이유를 기억하자.

var isPalindrome = function (head) {
  let rev = null
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  while (slow) {
    let tmp = slow.next
    slow.next = rev
    rev = slow
    slow = tmp
  }
  while (rev && rev.val === head.val) {
    head = head.next
    rev = rev.next
  }
  return !rev
}

// runner 를 활용한 풀이법도 익혀보자.. 나중에
