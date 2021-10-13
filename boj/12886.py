from collections import deque


def bfs():
    global a, b, c

    if total % 3 != 0:
        return 0

    queue = deque([(a, c)])
    while queue:
        x, y = queue.popleft()
        z = total - x - y
        if x == y and y == z:
            return 1

        for na, nb in ((x, y), (y, z), (x, z)):
            if na > nb:
                tmp = nb
                nb = na
                na = tmp
            elif na == nb:
                continue
            nc = total - na - nb
            # print(na, nb)
            na, nb = 2*na, nb - na
            nx = min([na, nb, nc])
            ny = max([na, nb, nc])
            # print(nx, ny, 'ha')
            if not visited[nx][ny]:
                queue.append((nx, ny))
                visited[nx][ny] = True
        # print(queue)

    return 0


a, b, c = sorted(list(map(int, input().split())))
visited = [[False] * 1501 for _ in range(1501)]
total = a+b+c

print(bfs())
