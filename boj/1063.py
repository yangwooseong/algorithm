import sys
input = sys.stdin.readline

board = [[[0] for _ in range(8)] for _ in range(8)]

king, stone, n = input().rstrip().split()

cols = [str(i) for i in range(1, 9)][::-1]
rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

Ky, Kx = rows.index(king[0]), cols.index(king[1])
Sy, Sx = rows.index(stone[0]), cols.index(stone[1])
board[Kx][Ky] = 'K'
board[Sx][Sy] = 'S'

dic = {
    'R': (0, 1),
    'L': (0, -1),
    'B': (1, 0),
    'T': (-1, 0),
    'RT': (-1, 1),
    'LT': (-1, -1),
    'RB': (1, 1),
    'LB': (1, -1)
}
n = int(n)
limit = len(board)

for _ in range(n):
    move = input().rstrip()
    x, y = dic[move]
    Kx_, Ky_ = Kx + x, Ky + y
    Sx_, Sy_ = Sx, Sy

    if Kx_ < 0 or Kx_ >= limit or Ky_ < 0 or Ky_ >= limit:
        continue
    if board[Kx_][Ky_] == 'S':
        Sx_, Sy_ = Sx + x, Sy + y
        if Sx_ < 0 or Sx_ >= limit or Sy_ < 0 or Sy_ >= limit:
            continue

    board[Sx_][Sy_] = 'S'
    board[Kx_][Ky_] = 'K'
    board[Kx][Ky] = 0
    Kx, Ky = Kx_, Ky_
    Sx, Sy = Sx_, Sy_

#     print(Kx, Ky)
# print(rows, Ky, rows[Ky])
print(rows[Ky] + cols[Kx])
print(rows[Sy] + cols[Sx])
