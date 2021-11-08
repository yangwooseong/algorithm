import heapq
import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
arr.sort(key=lambda x: (x[1], x[0]))

queue = []

for i in arr:
    heapq.heappush(queue, i[0])
    if i[1] < len(queue):
        heapq.heappop(queue)
    # print(queue)

print(sum(queue))
