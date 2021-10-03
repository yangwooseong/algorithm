import sys
from collections import deque

n, k = list(map(int, input().split()))

arr = list(i for i in range(1, n+1))
queue = deque(arr)
count = 0
result = []

while queue:
    count += 1
    if count % k == 0:
        result.append(queue.popleft())
    else:
        queue.append(queue.popleft())

print('<' + ', '.join(list(map(str, result))) + '>')
