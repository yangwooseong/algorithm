import sys
from collections import deque
input = sys.stdin.readline

n, m = list(map(int, input().rstrip().split()))
board = [list(map(lambda x: ord(x) - ord('A'), input().rstrip()))
         for _ in range(n)]

M = 1


def dfs(x, y, cnt):
    global M

    M = max(M, cnt)
    # print(path)
    for dir in dirs:
        nx, ny = x + dir[0], y + dir[1]
        if 0 <= nx < n and 0 <= ny < m and not visited[board[nx][ny]]:
            visited[board[nx][ny]] = 1
            dfs(nx, ny, cnt+1)
            visited[board[nx][ny]] = 0


dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]
visited = [0]*26
visited[board[0][0]] = 1
dfs(0, 0, 1)
print(M)
