# from collections import deque

# n = int(input())

# arr = []

# for _ in range(n):
#     arr.append(int(input()))

# arr.sort()
# queue = deque(arr)
# ans = 0
# if len(queue) == 1:
#     print(0)
#     exit()

# while queue:
#     tmp = queue.popleft() + queue.popleft()
#     ans += tmp
#     for i in range(len(queue)):
#         if queue[i] >= tmp:
#             queue.insert(i, tmp)
#             break

#         if i == len(queue) - 1:
#             queue.append(tmp)
#     print(queue, ans)
# print(ans)

# O(n^2)

import heapq

n = int(input())
arr = []
for _ in range(n):
    heapq.heappush(arr, int(input()))

if len(arr) == 1:
    print(0)
else:
    ans = 0
    while len(arr) > 1:
        tmp = heapq.heappop(arr) + heapq.heappop(arr)
        ans += tmp
        heapq.heappush(arr, tmp)
        # print(arr, ans)
    print(ans)
