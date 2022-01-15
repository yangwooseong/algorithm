let findDuplicate = function (nums) {
  let slow = 0
  let fast = 0

  while (true) {
    console.log(slow, fast)
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (slow === fast) break
  }
  slow2 = 0
  while (true) {
    slow = nums[slow]
    slow2 = nums[slow2]
    if (slow === slow2) return slow
  }
}
