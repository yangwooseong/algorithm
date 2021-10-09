import sys
input = sys.stdin.readline
sys.setrecursionlimit(100001)

n, m = list(map(int, input().split()))
g = [[] for _ in range(n)]
for _ in range(m):
    x, y = list(map(int, input().split()))
    g[x].append(y)
    g[y].append(x)

visited = [0 for _ in range(n)]


def dfs(i, cnt):
    if cnt >= 5:
        print(1)
        exit()

    for j in g[i]:
        if not visited[j]:
            visited[j] = 1
            dfs(j, cnt+1)
            visited[j] = 0


for i in range(n):
    if not visited[i]:
        visited[i] = 1
        dfs(i, 1)
        visited[i] = 0

print(0)
