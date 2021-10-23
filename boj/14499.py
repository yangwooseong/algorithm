n, m, x, y, k = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))
orders = list(map(int, input().split()))
dice = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]
dir = 0


def replace_dice(n):
    if n == 1:
        dice[1], dice[3], dice[4], dice[6] = dice[4], dice[1], dice[6], dice[3]
    elif n == 2:
        dice[1], dice[3], dice[4], dice[6] = dice[3], dice[6], dice[1], dice[4]
    elif n == 3:
        dice[1], dice[5], dice[6], dice[2] = dice[5], dice[6], dice[2], dice[1]
    elif n == 4:
        dice[1], dice[5], dice[6], dice[2] = dice[2], dice[1], dice[5], dice[6]


for i in range(k):
    nx, ny = x + dx[orders[i]-1], y + dy[orders[i]-1]

    if 0 <= nx < n and 0 <= ny < m:
        replace_dice(orders[i])
        if arr[nx][ny] == 0:
            arr[nx][ny] = dice[6]
        else:
            dice[6] = arr[nx][ny]
            arr[nx][ny] = 0
        print(dice[1])
        x, y = nx, ny
    # print(orders[i]-1, nx, ny)
