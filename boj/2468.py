import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

n = int(input())
board = []

for _ in range(n):
    board.append(list(map(int, input().split())))


def get_areas(h):
    def dfs(i, j):
        for dir in dirs:
            ni, nj = i + dir[0], j + dir[1]
            if 0 <= ni < n and 0 <= nj < n and\
                    not visited[ni][nj] and board[ni][nj] > h:
                visited[ni][nj] = 1
                dfs(ni, nj)

    visited = [[0 for _ in range(n)] for _ in range(n)]
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    count = 0
    for i in range(n):
        for j in range(n):
            if board[i][j] > h and not visited[i][j]:
                visited[i][j] = 1
                count += 1
                dfs(i, j)
    return count


m = max(list(map(max, board)))
M = 1
for i in range(1, m+1):
    # print(i, get_areas(i))
    M = max(get_areas(i), M)
print(M)
