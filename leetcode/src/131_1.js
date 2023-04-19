/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const isPalindrome = (str) => str === str.split('').reverse().join('')

  const ans = []
  const partition = []
  const dfs = (idx, str) => {
    if (!str) { 
      ans.push(partition.slice())
    }

    for (let i=idx;i<s.length;i++) {
      if (isPalindrome(s.slice(idx, i+1))) {
        partition.push(s.slice(idx, i+1))
        dfs(i+1, s.slice(i+1))
        partition.pop()
      }
    }
  }

  dfs(0, s)

  return ans
};

partition('aab')