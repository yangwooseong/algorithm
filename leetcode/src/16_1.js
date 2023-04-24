/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const sum = (i, j, k) => (nums[i] + nums[j] + nums[k])
    nums.sort((a, b) => { return a - b })
    let ans = Infinity

    for (let i=0;i<nums.length;i++) {
        if (nums[i] === nums[i-1]) { continue }

        j = i + 1
        k = nums.length - 1
        while (j < k) {
            if (j > i + 1 && nums[j] === nums[j-1]) { 
                j += 1
                continue
            }
            const s = sum(i, j, k)
            if (Math.abs(ans - target) > Math.abs(s - target)) { ans = s }
            if (s === target) { return target }
            else if (s < target) { j += 1 }
            else { k -= 1 }
        }
    }
    return ans
};