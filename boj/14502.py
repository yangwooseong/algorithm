import sys
import copy
input = sys.stdin.readline

dir = [(1, 0), (0, 1), (-1, 0), (0, -1)]


def dfs(board, i, j):
    board[i][j] = 2
    for d in dir:
        nx, ny = i + d[0], j + d[1]
        if 0 <= nx < len(board) and 0 <= ny < len(board[0]) and board[nx][ny] == 0:
            dfs(board, nx, ny)

    return


h, w = [int(x) for x in input().rstrip().split()]
board = []

for _ in range(h):
    board.append([int(x) for x in input().rstrip().split()])

empty = []
for i in range(h):
    for j in range(w):
        if board[i][j] == 0:
            empty.append((i, j))

ans = 0
for i in range(len(empty)):
    for j in range(i):
        for k in range(j):
            x1, y1 = empty[i]
            x2, y2 = empty[j]
            x3, y3 = empty[k]

            tmp_board = copy.deepcopy(board)
            tmp_board[x1][y1] = 1
            tmp_board[x2][y2] = 1
            tmp_board[x3][y3] = 1

            count = 0
            for m in range(h):
                for n in range(w):
                    if tmp_board[m][n] == 2:
                        dfs(tmp_board, m, n)
            # print(tmp_board, i, j, k)
            # if k == 1:
            #     sys.exit()
            for x in range(len(tmp_board)):
                for y in range(len(tmp_board[0])):
                    if tmp_board[x][y] == 0:
                        count += 1
            # print(count)
            ans = max(ans, count)
print(ans)
