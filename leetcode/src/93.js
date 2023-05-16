/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) { return [] }

  const ans = []

  const isIPAddress = (str) => str === '0' || (!str.startsWith('0') && Number(str) <= 255)

  const dfs = (start, arr) => {
      if (arr.length === 4 && start === s.length) { ans.push(arr.join('.')) }

      for (let i=start;i<s.length;i++) {
          if (isIPAddress(s.slice(start, i+1))) {
              arr.push(s.slice(start, i+1))
              dfs(i+1, arr)
              arr.pop()
          }
      }
  }

  dfs(0, []) 

  return ans
};