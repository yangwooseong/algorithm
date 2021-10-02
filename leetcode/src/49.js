/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let obj = {}
  strs.forEach(val => {
    const sortedString = val.split('').sort().join('')
    obj[sortedString] = obj[sortedString] == undefined ? [val] : [...obj[sortedString], val]
  })
  return Object.values(obj)
};
const strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))