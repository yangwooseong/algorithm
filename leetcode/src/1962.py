class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        piles = [-x for x in piles]
        heapq.heapify(piles)
        for i in range(k):
            heapq.heappush(piles, math.floor(heapq.heappop(piles) / 2))

        return -sum(piles)