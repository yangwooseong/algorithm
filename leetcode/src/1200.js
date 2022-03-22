/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b)
  const ans = []
  let min = Infinity
  for(let i=0;i<arr.length-1;i++) {
    min = Math.min(arr[i+1] - arr[i], min)
  }
  for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
      if(arr[j] - arr[i] === min) {
        ans.push([arr[i], arr[j]])      
        break
      }
      else if(arr[j] - arr[i] > min) {
        break
      }
    }
  }
  return ans
};