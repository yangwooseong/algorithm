/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  return Object.values(strs.reduce((acc, cur) => {
      const key = cur.split('').sort().join('')
      const ret = Object.assign({}, acc)
      ret[key] = ret[key] ? [...ret[key], cur]: [cur]
      return ret

  }, {}))
};

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log("LOG: ", groupAnagrams(strs))