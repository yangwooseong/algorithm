board, zero = [], []

for _ in range(9):
    board.append(list(map(int, input().split())))

for i in range(9):
    for j in range(9):
        if board[i][j] == 0:
            zero.append((i, j))


def get_promising_nums(i, j):
    arr = []
    for n in range(1, 10):
        duplicated = False
        if n in board[i]:
            duplicated = True
        if duplicated:
            continue

        for k in range(9):
            if board[k][j] == n:
                duplicated = True
                break
        if duplicated:
            continue

        tmp_i = i // 3
        tmp_j = j // 3
        for p in range(tmp_i*3, (tmp_i+1)*3):
            for q in range(tmp_j*3, (tmp_j+1)*3):
                if board[p][q] == n:
                    duplicated = True
                    break
            if duplicated:
                break
        if not duplicated:
            arr.append(n)
    return arr


def dfs(zero_cnt):
    if zero_cnt == len(zero):
        for i in range(9):
            print(*board[i])
        exit()

    (i, j) = zero[zero_cnt]
    nums = get_promising_nums(i, j)
    for num in nums:
        board[i][j] = num
        dfs(zero_cnt+1)
        board[i][j] = 0


dfs(0)
