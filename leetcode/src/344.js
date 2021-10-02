/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let start = 0
  let end = s.length - 1
  for(start=0;start<end;start++) {
    const tmp = s[start]
    s[start] = s[end]
    s[end] = tmp
    end--
  } 
};

let arr = ['h', 'e', 'l', 'l', 'o']
reverseString(arr)
console.log(arr)
