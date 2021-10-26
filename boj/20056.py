import copy

n, m, k = list(map(int, input().split()))
arr = []
board = [[[] for _ in range(n)] for _ in range(n)]
# print(board)
for _ in range(m):
    fire = list(map(int, input().split()))
    x, y, m, s, d = fire
    board[x-1][y-1].append((m, s, d))

# print(board)

dirs = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]
for _ in range(k):
    new_board = [[[] for _ in range(n)] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            fires = board[i][j]
            for fire in fires:
                # print(fires, i, j)
                m, s, d = fire
                ni, nj = i + s*dirs[d][0], j + s*dirs[d][1]
                ni, nj = ni % n, nj % n
                new_board[ni][nj].append((m, s, d))
    # print(new_board)

    for i in range(n):
        for j in range(n):
            fires = new_board[i][j]
            if len(fires) < 2:
                continue
            tm, ts, td = 0, 0, 0
            for fire in fires:
                m, s, d = fire
                tm, ts = tm + m, ts + s
                td = td + d % 2
            tm = tm // 5
            if tm == 0:
                new_board[i][j] = []
            else:
                ts = ts // len(fires)
                dd = [0, 2, 4, 6] if td == len(
                    fires) or td == 0 else [1, 3, 5, 7]
                tmp = []
                for dir in dd:
                    tmp.append((tm, ts, dir))
                new_board[i][j] = tmp
    # print('after, ', new_board)
    board = new_board
ans = 0
for i in range(n):
    for j in range(n):
        for fire in board[i][j]:
            ans += fire[0]

print(ans)
