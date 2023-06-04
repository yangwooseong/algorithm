/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const dict = words.reduce((acc, cur) => {
      if (!acc[cur]) { acc[cur] = [] }
      acc[cur] = acc[cur] + 1
      return acc
  }, {})

  return Object.keys(dict).sort((a, b) => {
      const diff = dict[b] - dict[a]
      if (diff === 0) { return a.localeCompare(b) }
      return diff
  }).slice(0, k)
}