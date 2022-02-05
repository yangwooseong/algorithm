// let maxVowels = (s, k) => {
//   const initializeHashMap = () => {
//     let hashMap = new Map()
//     let vowels = 0
//     for (let i = 0; i < k; i++) {
//       if (['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
//         hashMap.set(s[i], hashMap.get(s[i]) + 1 || 1)
//         vowels += 1
//       }
//     }
//     return [hashMap, vowels]
//   }

//   let [hashMap, cur] = initializeHashMap()
//   let left = 0
//   let right = k - 1
//   let ans = cur
//   while (right < s.length - 1) {
//     right += 1
//     if (['a', 'e', 'i', 'o', 'u'].includes(s[right])) {
//       hashMap.set(s[right], hashMap.get(s[right]) + 1 || 1)
//       cur += 1
//     }
//     if (hashMap.has(s[left])) {
//       hashMap.set(s[left], hashMap.get(s[left]) - 1)
//       cur -= 1
//     }
//     if (hashMap.get(s[left]) === 0) hashMap.delete(s[left])
//     left += 1
//     ans = Math.max(cur, ans)
//   }
//   return ans
// }

let maxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let ans = 0
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) cnt += 1
    if (i >= k && vowels.has(s[i - k])) cnt -= 1
    ans = Math.max(ans, cnt)
  }
  return ans
}
