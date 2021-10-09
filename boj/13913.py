import sys
from collections import deque
sys.setrecursionlimit(100001)
input = sys.stdin.readline

n, k = list(map(int, input().split()))
dist = [0 for _ in range(10**5+1)]


def bfs():
    queue = deque([n])
    while queue:
        x = queue.popleft()
        if x == k:
            print(dist[k])
            break
        for d in [-1, 1, x]:
            nx = x + d
            if 0 <= nx <= 10**5 and not dist[nx] and nx != n:
                dist[nx] = dist[x] + 1
                queue.append(nx)


trace = [k]


def dfs_for_trace(x):
    if len(trace) == dist[k]+1 and trace[-1] == n:
        print(' '.join(list(map(str, trace[::-1]))))
        exit()

    for d in [-1, 1, x // 2 if x % 2 == 0 else 0]:
        nx = x - d
        if 0 <= nx <= 10**5 and dist[nx] == dist[x] - 1 and nx not in trace:
            trace.append(nx)
            dfs_for_trace(nx)
            trace.pop()


bfs()
dfs_for_trace(k)
