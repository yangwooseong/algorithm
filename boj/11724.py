import sys
sys.setrecursionlimit(3000)
input = sys.stdin.readline

n, m = list(map(int, input().split()))
g = [[] for _ in range(n+1)]
visited = []

for _ in range(m):
    a, b = list(map(int, input().split()))
    g[a].append(b)
    g[b].append(a)


def dfs(i):
    visited.append(i)
    for v in g[i]:
        if v in visited:
            continue
        dfs(v)


num = 0
for i in range(1, n+1):
    if i in visited:
        continue
    dfs(i)
    num += 1
print(num)
