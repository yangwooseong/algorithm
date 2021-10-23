from collections import deque


n, l, r = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))


def bfs(i, j, tmp, check):
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    queue = deque([(i, j)])
    visited = [(i, j)]

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and\
                    l <= abs(tmp[nx][ny] - tmp[x][y]) <= r and not (nx, ny) in visited\
                and not check[nx][ny]:
                queue.append((nx, ny))
                check[nx][ny] = 1
                visited.append((nx, ny))

    total = 0
    for c in visited:
        x, y = c
        total += tmp[x][y]

    for c in visited:
        x, y = c
        tmp[x][y] = total // len(visited)

    if len(visited) != 1:
        return True
    else:
        return False


is_moved = True
ans = 0
while True:
    is_moved = False
    check = [[0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if not check[i][j]:
                is_moved = bfs(i, j, arr, check) or is_moved
                check[i][j] = 1

    # break
    if not is_moved:
        break
    ans += 1

print(ans)
