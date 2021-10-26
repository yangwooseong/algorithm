from collections import deque


def locate_bombs():
    for i in range(r):
        for j in range(c):
            if arr[i][j] == 'O':
                bombs.append((i, j))


def make_bombs():
    for i in range(r):
        for j in range(c):
            if arr[i][j] == '.':
                arr[i][j] = 'O'


def explode():      # bombs deque에 들어있는 좌표로 폭탄 터트림
    while bombs:
        x, y = bombs.popleft()
        arr[x][y] = '.'
        if 0 <= x - 1:
            arr[x - 1][y] = '.'
        if x + 1 < r:
            arr[x + 1][y] = '.'
        if 0 <= y - 1:
            arr[x][y - 1] = '.'
        if y + 1 < c:
            arr[x][y + 1] = '.'


r, c, n = list(map(int, input().split()))
arr = [list(input()) for _ in range(r)]
n -= 1
while n:
    bombs = deque()
    locate_bombs()
    make_bombs()
    n -= 1
    if n == 0:
        break
    explode()
    n -= 1

for i in range(r):
    for j in range(c):
        print(arr[i][j], end='')
    print()
