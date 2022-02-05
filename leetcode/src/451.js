let frequencySort = (s) => {
  let m = new Map()
  for (let i = 0; i < s.length; i++) m.set(s[i], m.get(s[i]) + 1 || 1)
  let arr = Array.from(m.entries())
  console.log(arr)
  arr.sort((a, b) => b[1] - a[1])
  return arr.map((item) => item[0].repeat(item[1])).join('')
}

const s = 'tree'
frequencySort(s)
