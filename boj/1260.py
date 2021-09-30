import sys
from typing import Deque
input = sys.stdin.readline

arr = list(int(x) for x in input().split())
n, m, l = arr[0], arr[1], arr[2]
board = [[0 for _ in range(n+1)] for _ in range(n+1)]

for _ in range(m):
    li = list(int(x) for x in input().split())
    board[li[0]][li[1]] = 1
    board[li[1]][li[0]] = 1

res = []


def dfs(i):
    res.append(i)
    for j in range(1, n+1):
        if board[i][j] == 1 and j not in res:
            dfs(j)


dfs(l)
for i in res:
    print('%d ' % i, end='')

res = []
q = Deque()
q.append(l)
visited = [l]


def bfs():
    while q:
        v = q.popleft()
        res.append(v)
        for j in range(1, n+1):
            if board[v][j] == 1 and j not in visited:
                q.append(j)
                visited.append(j)


bfs()
print()
for i in res:
    print('%d ' % i, end='')
print()
