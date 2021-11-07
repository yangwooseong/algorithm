import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

n, start, end = list(map(int, input().split()))
g = [[] for _ in range(n+1)]
for _ in range(n-1):
    a, b, c = list(map(int, input().split()))
    g[a].append((b, c))
    g[b].append((a, c))


def dfs(node, path, distance):
    if node == end:
        print(sum(distance) - max(distance))
        # print(path)
        return

    for i in g[node]:
        p, d = i
        if p not in path:
            path.append(p)
            distance.append(d)
            dfs(i[0], path, distance)
            path.pop()
            distance.pop()


if start == end:
    print(0)
elif n <= 2:
    print(0)
else:
    dfs(start, [start], [])
