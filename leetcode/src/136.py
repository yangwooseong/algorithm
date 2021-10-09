class Solution:
    def singleNumber(self, nums):
        result = 0
        for num in nums:
            result ^= num
            print(result)
        return result


a = Solution()
a.singleNumber([4, 1, 2, 1, 2])
