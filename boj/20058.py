import sys
sys.setrecursionlimit(10**5)

n, q = map(int, input().split())
L = 2**n
arr = [list(map(int, input().split())) for _ in range(L)]
orders = list(map(int, input().split()))
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]


def rotate(l):
    tmp_arr = []
    for row in range(0, L, 2**l):
        for j in range(2**l):
            tmp = []
            for col in range(0, L, 2**l):
                for i in range(row+2**l-1, row-1, -1):
                    tmp.append(arr[i][col+j])
            tmp_arr.append(tmp)

    return tmp_arr


def melt():
    target = []
    for i in range(L):
        for j in range(L):
            if not arr[i][j]:
                continue
            cnt = 0
            for d in range(4):
                ni, nj = i + dx[d], j + dy[d]
                if 0 <= ni < L and 0 <= nj < L and arr[ni][nj]:
                    cnt += 1
            if cnt < 3:
                target.append((i, j))
    for x, y in target:
        arr[x][y] -= 1


def get_sum():
    s = 0
    for i in arr:
        s += sum(i)
    return s


def largest_size(x, y):
    global cnt
    for d in range(4):
        nx, ny = x + dx[d], y + dy[d]
        if 0 <= nx < L and 0 <= ny < L and not visited[nx][ny] and arr[nx][ny]:
            visited[nx][ny] = 1
            largest_size(nx, ny)
            cnt += 1


for l in orders:
    arr = rotate(l)
    melt()

largest = 0
visited = [[0]*L for _ in range(L)]
for i in range(L):
    for j in range(L):
        if not visited[i][j] and arr[i][j]:
            cnt = 1
            visited[i][j] = 1
            largest_size(i, j)
            largest = max(cnt, largest)

print(get_sum())
print(largest)
