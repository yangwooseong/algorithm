from collections import deque
import sys
input = sys.stdin.readline


def bfs():
    queue = deque([start])
    visited = [[[0 for _ in range(c)] for _ in range(r)] for _ in range(l)]
    x, y, z = start
    visited[x][y][z] = 1
    dirs = [(0, 0, 1), (0, 1, 0), (0, 0, -1),
            (0, -1, 0), (1, 0, 0), (-1, 0, 0)]
    cnt = 0

    while queue:
        next_queue = deque()
        for q in queue:
            x, y, z = q
            if (x, y, z) == end:
                print('Escaped in %d minute(s).' % cnt)
                return
            for dir in dirs:
                nx, ny, nz = x + dir[0], y + dir[1], z + dir[2]
                if 0 <= nx < l and 0 <= ny < r and 0 <= nz < c and\
                        not visited[nx][ny][nz] and arr[nx][ny][nz] != '#':
                    visited[nx][ny][nz] = 1
                    next_queue.append((nx, ny, nz))
        if next_queue:
            queue = next_queue
            cnt += 1
            # print(queue)
        else:
            print('Trapped!')
            return


def get_start_and_end(arr):
    start, end = None, None
    for i in range(l):
        for j in range(r):
            for k in range(c):
                if arr[i][j][k] == 'S':
                    start = (i, j, k)
                elif arr[i][j][k] == 'E':
                    end = (i, j, k)
    return start, end


while True:
    l, r, c = list(map(int, input().rstrip().split()))
    if (l, r, c) == (0, 0, 0):
        break

    arr = []
    for _ in range(l):
        tmp = [list(list(input().rstrip())) for _ in range(r)]
        input()
        arr.append(tmp)

    start, end = get_start_and_end(arr)
    bfs()
