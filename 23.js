/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
  if (!lists.length) { return null }
  const mergeTwoList = (l1, l2) => {
      let res = new ListNode()
      const head = res

      while (l1 && l2) {
          if (l1.val > l2.val) {
              res.next = new ListNode(l2.val, null)
              l2 = l2.next
          } else {
              res.next = new ListNode(l1.val, null)
              l1 = l1.next
          }
          res = res.next
      }

      if (!l1) { res.next = l2 }
      else if (!l2) { res.next = l1 }

      return head.next
  }

  return lists.reduce(mergeTwoList)
};