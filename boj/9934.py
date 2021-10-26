from collections import deque

k = int(input())
arr = list(map(int, input().split()))

queue = deque()
for i in range(k):
    depth = 2 ** (k-i-1)
    if i == 0:
        queue.append(depth-1)
    else:
        l = len(queue)
        for _ in range(l):
            q = queue.popleft()
            queue.append(q - depth)
            queue.append(q + depth)
        # print(queue)
    for q in queue:
        print(arr[q], end=' ')
    print()
