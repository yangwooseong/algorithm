from collections import deque
import copy

n, m = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))


def is_outside(x, y):
    visited = [[0 for _ in range(m)] for _ in range(n)]
    dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    queue = deque([(x, y)])

    while queue:
        x, y = queue.popleft()
        if x in [0, n-1] or y in [0, m-1]:
            return True
        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < n and 0 <= ny < m and\
                    not visited[nx][ny] and not arr[nx][ny]:
                visited[nx][ny] = 1
                queue.append((nx, ny))

    return False


def is_melted_all(arr):
    for i in range(len(arr)):
        for j in range(len(arr[0])):
            if arr[i][j] == 1:
                return False
    return True


cnt = 0
tmp = copy.deepcopy(arr)

while not is_melted_all(tmp):
    tmp = copy.deepcopy(arr)
    last_pieces = True

    for i in range(n):
        for j in range(m):
            if arr[i][j] and is_outside(i, j):
                tmp[i][j] = 0
            elif arr[i][j] and not is_outside(i, j):
                last_pieces = False

    if last_pieces:
        last_cnt = 0
        for i in range(n):
            for j in range(m):
                if arr[i][j] == 1:
                    last_cnt += 1
    arr = tmp
    cnt += 1
    # print(tmp)

print(cnt)
print(last_cnt)
