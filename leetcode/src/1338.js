/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
   const m = new Map()
   arr.forEach((v) => {
     m.set(v, m.get(v) + 1 || 1)
   })
   const sortedMap = new Map([...m.entries()].sort((a,b) => b[1] - a[1]))
   let ans = 0
   let sum = 0
   for(let v of sortedMap.values()) {
     sum += v
     ans += 1
     if(sum >= arr.length / 2) return ans
   }
};
const arr = [9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]
console.log(minSetSize(arr))