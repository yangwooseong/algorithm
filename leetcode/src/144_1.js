// var preorderTraversal = function (root) {
//   let answer = []
//   const preorder = (current) => {
//     if (!current) return
//     answer.push(current.val)
//     preorder(current.left)
//     preorder(current.right)
//   }
//   preorder(root)
//   console.log(answer)
//   return answer
// }

var preorderTraversal = function (root) {
  if (!root) return []
  const stack = [root]
  const answer = []

  let node
  while (stack.length) {
    node = stack.pop()
    answer.push(node.val)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  return answer
}
