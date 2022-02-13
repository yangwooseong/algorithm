let maxProduct = (words) => {
  const bitmask = (word) => {
    let bit = 0
    for (let c of word) {
      bit |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    return bit
  }
  words = words.sort((a, b) => b.length - a.length)
  const bitmaskArr = words.map(bitmask)
  let ans = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!(bitmaskArr[i] & bitmaskArr[j])) {
        ans = Math.max(words[i].length * words[j].length, ans)
        break
      }
    }
  }
  console.log(ans)
  return ans
}

const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']
maxProduct(words)
