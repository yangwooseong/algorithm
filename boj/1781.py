import heapq
import sys

input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
arr.sort()
queue = []

for i in arr:
    heapq.heappush(queue, i[1])
    if i[0] < len(queue):
        heapq.heappop(queue)

print(sum(queue))

# 소름 돋네.. ㅜㅜ
