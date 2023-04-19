/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const dict = {}
  const freqs = Array(nums.length+1).fill(undefined).map(v => new Array())

  for(let i=0;i<nums.length;i++) {
      dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1
  }

  for (const [key, value] of Object.entries(dict)) {
      freqs[value].push(Number.parseInt(key))
  }



  return freqs.filter(v => v.length).reverse().flatMap(v => v).slice(0, k)
};
