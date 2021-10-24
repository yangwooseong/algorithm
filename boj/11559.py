import copy
from collections import deque

arr = []
for _ in range(12):
    arr.append(list(input()))


def down():
    for i in range(6):
        for j in range(10, -1, -1):
            for k in range(11, j, -1):
                if arr[k][i] == '.' and arr[j][i] != '.':
                    arr[k][i] = arr[j][i]
                    arr[j][i] = '.'
                    break


def br(arr):
    tmp = copy.deepcopy(arr)
    dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    pop = False
    visited = [[0 for _ in range(6)] for _ in range(12)]

    for i in range(12):
        for j in range(6):
            if arr[i][j] == '.' or visited[i][j]:
                continue

            queue = deque([(i, j)])
            tmp_arr = [(i, j)]
            visited[i][j] = 1
            while queue:
                x, y = queue.popleft()
                for dir in dirs:
                    nx, ny = x + dir[0], y + dir[1]
                    if 0 <= nx < 12 and 0 <= ny < 6 and\
                            arr[x][y] == arr[nx][ny] and not visited[nx][ny]:
                        queue.append((nx, ny))
                        tmp_arr.append((nx, ny))
                        visited[nx][ny] = 1
            #             print(nx, ny)
            # print(i, j, tmp_arr)
            if len(tmp_arr) >= 4:
                for l in tmp_arr:
                    tmp[l[0]][l[1]] = '.'
                pop = True

    return pop, tmp


ans = 0
while True:
    pop, arr = br(arr)
    down()
    if not pop:
        break
    ans += 1

print(ans)
