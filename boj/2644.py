import sys
input = sys.stdin.readline
n = int(input())
a, b = map(int, input().split())
m = int(input())
g = [[] for _ in range(n+1)]

for _ in range(m):
    x, y = map(int, input().split())
    g[x].append(y)
    g[y].append(x)


def dfs(v, path, cnt):
    # print(v, path, cnt)
    if b in path:
        print(cnt)
        exit()
    for w in g[v]:
        if w not in path:
            path.append(w)
            dfs(w, path, cnt+1)
            path.pop()


dfs(a, [], 0)
print(-1)
