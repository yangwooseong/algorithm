from collections import deque
import sys
input = sys.stdin.readline

n, m = list(map(int, input().rstrip().split()))
arr = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = list(map(int, input().rstrip().split()))
    arr[a].append(b)
    arr[b].append(a)


def bfs(i):
    queue = deque([i])
    steps = [-1 for _ in range(n+1)]
    steps[0] = 0
    steps[i] = 0

    while queue:
        q = queue.popleft()
        for j in arr[q]:
            if steps[j] == -1:
                steps[j] = steps[q] + 1
                queue.append(j)

    return sum(steps)


step = None
ans = 0
for i in range(1, n+1):
    if step is None or step > bfs(i):
        step = bfs(i)
        ans = i
print(ans)
