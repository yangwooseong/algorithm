/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
  const dictOf = word => word.split('').reduce((acc, cur) => {
      if (!acc[cur]) {
          acc[cur] = 1
      } else {
          acc[cur] += 1
      }
      return acc
  }, {})
  const dicts2 = words2.reduce((acc, cur) => {
      const dict = dictOf(cur)
      Object.keys(dict).forEach(key => {
          acc[key] = acc[key] ? Math.max(acc[key], dict[key]) : dict[key]
      })
      return acc
  }, {})
  const isSubset = (dict1, dict2) => Object.keys(dict2).every(key => dict1[key] >= dict2[key])

  return words1.filter(word => isSubset(dictOf(word), dicts2))
};