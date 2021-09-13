/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const expand = (left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left = left - 1
      right = right + 1
    }
    return s.slice(left+1, right)
  }
  if(s.length < 2 || s === s.split('').reverse().join()) return s
  
  let longest = ''
  for(let i=0;i<s.length;i++) {
    if(longest.length < expand(i,i+1).length) {
      longest = expand(i,i+1)
    } 
    if(longest.length < expand(i,i+2).length) {
      longest = expand(i,i+2)
    }
  }
  return longest
};

const s = "aaaaaaaa"
console.log(longestPalindrome(s))
