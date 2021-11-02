from collections import deque

n = int(input())

g = [[] for _ in range(n+1)]
scores = [0 for _ in range(n)]

while True:
    a, b = list(map(int, input().split()))
    if a == -1 and b == -1:
        break

    g[a].append(b)
    g[b].append(a)


def bfs(i):
    queue = deque([i])
    visited = [-1 for _ in range(n+1)]
    visited[i] = 0

    while queue:
        q = queue.popleft()
        for p in g[q]:
            if visited[p] == -1:
                visited[p] = visited[q] + 1
                queue.append(p)
    return max(visited)


for i in range(1, n+1):
    scores[i-1] = bfs(i)

arr = list(filter(lambda x: x == min(scores), scores))
print(min(scores), len(arr))
for i in range(len(scores)):
    if scores[i] == min(scores):
        print(i+1, end=' ')
