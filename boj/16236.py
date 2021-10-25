from collections import deque

n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

found = False
for i in range(n):
    for j in range(n):
        if arr[i][j] == 9:
            x, y = i, j
            arr[i][j] = 0
            found = True
            break
    if found:
        break

size = 2
exp = 0
time = 0


def find_feed(i, j):
    global size, exp, time, arr

    dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    queue = deque([(i, j)])
    visited = [[0] * n for _ in range(n)]
    visited[i][j] = 1

    tmp_time = 0
    while queue:
        next_queue = deque([])

        for q in queue:
            x, y = q
            for dir in dirs:
                nx, ny = x + dir[0], y + dir[1]
                if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and arr[nx][ny] <= size:
                    visited[nx][ny] = 1
                    next_queue.append((nx, ny))

        queue = next_queue
        tmp_time += 1
        feed = []
        for q in queue:
            x, y = q
            if 0 < arr[x][y] < size:
                feed.append((x, y))
        # print(queue, time, arr, feed, size)
        if feed:
            feed.sort(key=lambda x: (x[0], x[1]))
            next_x, next_y = feed[0][0], feed[0][1]
            arr[next_x][next_y] = 0
            time += tmp_time
            exp += 1
            if exp == size:
                size += 1
                exp = 0
            return next_x, next_y

    return -1, -1


while True:
    next_x, next_y = find_feed(x, y)
    if next_x == -1 and next_y == -1:
        print(time)
        exit()
    x, y = next_x, next_y

    feed_exist = False
    for i in range(n):
        for j in range(n):
            if 0 < arr[i][j] < size:
                feed_exist = True
                break
        if feed_exist:
            break

    if not feed_exist:
        print(time)
        break
