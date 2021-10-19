n, m = list(map(int, input().split()))
r, c, d = list(map(int, input().split()))
arr = []
ans = 0

for _ in range(n):
    arr.append(list(map(int, input().split())))

# 순서대로 북, 동, 남, 서로 이동
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def clean(x, y, d):
    global ans
    if arr[x][y] == 0:
        arr[x][y] = 2
        ans += 1
    for _ in range(4):
        nd = (d + 3) % 4
        nx = x + dx[nd]
        ny = y + dy[nd]
        if arr[nx][ny] == 0:
            clean(nx, ny, nd)
            return
        d = nd

    # 뒤로 이동
    nd = (d+2) % 4
    nx = x + dx[nd]
    ny = y + dy[nd]
    if arr[nx][ny] == 1:
        return
    clean(nx, ny, d)


clean(r, c, d)
print(ans)
