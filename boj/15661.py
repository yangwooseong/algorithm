import sys
from collections import deque

input = sys.stdin.readline
a = []

n = int(input())
for _ in range(n):
    a.append(list(map(int, input().split())))
visited = [0 for _ in range(n)]
ans = 10**10


def get_minimal_diff(idx, cnt):
    global ans

    if cnt == n:
        return

    start, link = 0, 0
    if cnt != 0:
        # print(visited)
        for i in range(n):
            for j in range(n):
                if visited[i] and visited[j]:
                    start += a[i][j]
                elif not visited[i] and not visited[j]:
                    link += a[i][j]
        ans = min(ans, abs(start - link))

    for i in range(idx, n):
        if not visited[i]:
            visited[i] = 1
            get_minimal_diff(i+1, cnt+1)
            visited[i] = 0


get_minimal_diff(0, 0)
print(ans)
