// let strWithout3a3b = (a, b) => {
//   let ans = ''
//   if (ans.endsWith('aa')) {
//     ans += 'b'
//     b--
//   } else if (ans.endsWith('bb')) {
//     ans += 'a'
//     a--
//   } else if (a >= b) {
//     ans += 'a'
//     a--
//   } else {
//     ans += 'b'
//     b--
//   }
//   return ans
// }

let strWithout3a3b = (A, B, a = 'a', b = 'b') => {
  if (B > A) return strWithout3a3b(B, A, b, a)
  let ans = ''
  while (A) {
    ans += a
    A -= 1
    if (A > B) {
      ans += a
      A -= 1
    }
    if (B > 0) {
      ans += b
      B -= 1
    }
  }
  return ans
}

console.log(strWithout3a3b(5, 3))
