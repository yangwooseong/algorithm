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
 var sortList = function(head) {
  const getMid = (node) => {
      let slow = node 
      let fast = node.next

      while (fast && fast.next) {
          slow = slow.next
          fast = fast.next.next
      }

      return slow
  }

  const split = (node) => {
      let left = node
      let right = getMid(node)
      const tmp = right.next
      right.next = null
      right = tmp

      return [left, right]
  }

  const merge = (l1, l2) => {
      let tail = new ListNode()
      const dummy = tail

      while (l1 && l2) {
          if (l1.val < l2.val) {
              tail.next = l1
              l1 = l1.next
          } else {
              tail.next = l2
              l2 = l2.next
          }
          tail = tail.next
      }
      if (l1) {
          tail.next = l1
      } else {
          tail.next = l2
      }

      return dummy.next
  }

  const sortList = (node) => {
      if (!node || !node.next) { return node }

      let [left, right] = split(node)
      return merge(sortList(left), sortList(right))
  }

  return sortList(head)
};