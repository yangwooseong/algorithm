/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = []
  const obj = {
    ']': '[',
    ')': '(',
    '}': '{',
  }
  if(s.length % 2 !==0 ) return false
  for(i=0;i<s.length;i++) {
    if(['(', '[', '{'].includes(s[i])) {
      stack.push(s[i])
    }
    else {
      if(stack.pop() !== obj[s[i]]) return false
    }
  }
  if(stack.length !== 0) return false
  return true    
};

console.log(isValid(['(', ')', '(']))