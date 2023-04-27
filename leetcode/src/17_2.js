var letterCombinations = function(digits) {
  if (!digits) { return []}
  
  const dict = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wyxz',
  }

  const ans = []
  const dfs = (nums, cur) => {
      const letters = dict[nums[0]]

      if (!nums.length) {
          ans.push(cur)
          return
      }

      for (let i=0;i<letters.length;i++) {
          dfs(nums.slice(1), cur + letters[i])
      }
  }

  dfs(digits, '')

  return ans
};