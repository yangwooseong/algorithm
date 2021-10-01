import sys
input = sys.stdin.readline
sys.setrecursionlimit(10000)
dir = [(1, 1), (1, 0), (1, -1), (0, 1), (0, -1), (-1, 1), (-1, -1), (-1, 0)]


def dfs(board, i, j):
    if board[i][j] == 1:
        board[i][j] = 0
        for d in dir:
            nx, ny = i + d[0], j + d[1]
            if 0 <= nx < len(board) and 0 <= ny < len(board[0]) and board[nx][ny] == 1:
                dfs(board, nx, ny)

    return


while True:
    w, h = [int(x) for x in input().rstrip().split()]
    if w == 0 and h == 0:
        break

    board, count = [], 0
    for _ in range(h):
        board.append([int(x) for x in input().rstrip().split()])

    for i in range(h):
        for j in range(w):
            if board[i][j] == 1:
                dfs(board, i, j)
                count += 1

    print(count)
