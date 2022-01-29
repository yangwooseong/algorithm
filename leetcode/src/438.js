let findAnagrams = (s, p) => {
  function ObjCompare(obj1, obj2) {
    const Obj1_keys = Object.keys(obj1)
    const Obj2_keys = Object.keys(obj2)
    if (Obj1_keys.length !== Obj2_keys.length) {
      return false
    }
    for (let k of Obj1_keys) {
      if (obj1[k] !== obj2[k]) {
        return false
      }
    }
    return true
  }

  const sCount = {}
  const pCount = {}
  for (let i = 0; i < p.length; i++) {
    sCount[s[i]] = sCount[s[i]] ? sCount[s[i]] + 1 : 1
    pCount[p[i]] = pCount[p[i]] ? pCount[p[i]] + 1 : 1
  }
  const res = []
  if (ObjCompare(sCount, pCount)) res.push(0)

  let left = 0
  for (let right = p.length; right < s.length; right++) {
    if (sCount[s[right]] !== undefined) sCount[s[right]] += 1
    else sCount[s[right]] = 1
    sCount[s[left]] -= 1
    if (sCount[s[left]] === 0) delete sCount[s[left]]
    left += 1
    if (ObjCompare(sCount, pCount)) res.push(left)
  }
  return res
}
