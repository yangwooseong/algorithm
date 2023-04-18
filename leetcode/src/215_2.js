/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  const maximum = nums.reduce((acc, cur) => acc > cur ? acc : cur, -Infinity)
 const dict = nums.reduce((acc, cur) => ({
     ...acc,
     [cur]: acc[cur] ? acc[cur] + 1 : 1
 }), {}) 
 
 for (let i=maximum;i>=-10000;i--) {
    k -= dict[i] ?? 0
      if (k <= 0) { return i}
  }
};

findKthLargest([-1, 2, 0], 2)