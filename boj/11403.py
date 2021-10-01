import sys
input = sys.stdin.readline
n = int(input())

g = [[] for _ in range(n)]

for i in range(n):
    arr = list(map(int, input().split()))
    for j in range(n):
        if arr[j] == 1:
            g[i].append(j)


def dfs(i, visited):
    for v in g[i]:
        if v not in visited:
            visited.append(v)
            dfs(v, visited)


ret = [[0 for _ in range(n)] for _ in range(n)]

for i in range(n):
    visited = []
    if len(g[i]) > 0:
        dfs(i, visited)
    for j in visited:
        ret[i][j] = 1

for x in ret:
    for y in x:
        print('%d' % y, end=' ')
    print()
