import sys
from collections import deque

input = sys.stdin.readline

k = int(input())

dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]


def dfs(x, y, m, n, board):
    stack = deque()
    stack.append((x, y))
    board[x][y] = 0

    while stack:
        x, y = stack.pop()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0 <= nx < m and 0 <= ny < n and board[nx][ny] == 1:
                stack.append((nx, ny))
                board[nx][ny] = 0


for _ in range(k):
    arr = [int(x) for x in input().rstrip().split()]
    n, m, l = arr
    board = [[0 for _ in range(n)] for _ in range(m)]
    for _ in range(l):
        x, y = [int(x) for x in input().rstrip().split()]
        board[y][x] = 1

    total = 0
    for i in range(m):
        for j in range(n):
            if board[i][j] == 1:
                dfs(i, j, m, n, board)
                total += 1
    print(total)
