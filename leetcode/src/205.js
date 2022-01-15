// my answer
// let isIsomorphic = function (s, t) {
//   let mapStoT = new Map()
//   let mapTtoS = new Map()
//   for (let i = 0; i < s.length; i++) {
//     if (!mapStoT.get(s[i]) && !mapTtoS.get(t[i])) {
//       mapStoT.set(s[i], t[i])
//       mapTtoS.set(t[i], s[i])
//     } else {
//       if (mapStoT.get(s[i]) !== t[i] || mapTtoS.get(t[i]) !== s[i]) {
//         return false
//       }
//     }
//   }

//   return true
// }

// const s = 'badc'
// const t = 'baba'
// console.log(isIsomorphic(s, t))

// solution

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false
  let m = new Map()

  for (let i = 0; i < s.length; i++) {
    if (m.has(s[i]) && m.get(s[i]) !== t[i]) return false
    else m.set(s[i], t[i])
  }

  // 여기서 X Y 사이즈 같은지 체크
  return new Set([...m.values()]).size === m.size
  // this checks if more than one character map to the same character
}

isIsomorphic('abcd', 'ffgh')
