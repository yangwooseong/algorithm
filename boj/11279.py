import heapq
import sys
input = sys.stdin.readline

n = int(input())
plus_heap = []
minus_heap = []

for _ in range(n):
    i = int(input())
    # print(minus_heap, plus_heap)
    if i == 0:
        if len(plus_heap) == 0 and len(minus_heap) == 0:
            print(0)
        else:
            if not plus_heap and not minus_heap:
                print(0)
            elif not plus_heap:
                print(-heapq.heappop(minus_heap))
            elif not minus_heap:
                print(heapq.heappop(plus_heap))
            elif plus_heap[0] >= minus_heap[0] and minus_heap:
                print(-heapq.heappop(minus_heap))
            elif plus_heap[0] < minus_heap[0] and plus_heap:
                print(heapq.heappop(plus_heap))

    else:
        if i > 0:
            heapq.heappush(plus_heap, i)
        elif i < 0:
            heapq.heappush(minus_heap, -i)
