import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
g = [[] for _ in range(n+1)]
G = [[] for _ in range(n+1)]

for _ in range(m):
    a, b = list(map(int, input().split()))
    g[b].append(a)


def dfs(i, res):
    for j in g[i]:
        if j not in res:
            res.append(j)
            dfs(j, res)


for i in range(1, n+1):
    visited = [0 for _ in range(n+1)]
    visited[i] = 1
    res = [i]
    dfs(i, res)
    G[i] = res[:]

lighter = len(list(filter(lambda x: len(x) > (n+1)//2, G)))
heavier = 0

for i in range(1, n+1):
    cnt = 0
    for j in range(1, n+1):
        if i in G[j]:
            cnt += 1
    if cnt > (n+1) // 2:
        heavier += 1

print(lighter + heavier)
