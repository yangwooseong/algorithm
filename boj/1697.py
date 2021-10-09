import sys
from collections import deque
input = sys.stdin.readline

n, k = list(map(int, input().split()))
dist = [0 for _ in range(10**5+1)]


def bfs():
    q = deque()
    q.append(n)

    while q:
        x = q.popleft()
        if x == k:
            print(dist[k])
            break

        for distance in [-1, 1, x]:
            nx = x + distance
            if 0 <= nx <= 10**5 and not dist[nx]:
                q.append(nx)
                dist[nx] = dist[x] + 1


bfs()
