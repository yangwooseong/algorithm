/**
 * @param {number[]} nums
 * @return {number[][]}
 */


 var permute = function(nums) {
  const per = []
  const res = []
  
  const dfs = (arr) => {
      if (arr.length === 0) { 
        res.push(per.slice()) 
        return
      }

      for (let i=0;i<arr.length;i++) {
        const copiedArr = arr.slice()
        per.push(arr[i])        
        copiedArr.splice(i, 1)

        dfs(copiedArr)

        per.pop()
      }
  }

  dfs(nums)
  return res
};

const nums = [1, 2, 3]
console.log(permute(nums))
