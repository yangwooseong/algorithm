from collections import deque

n, k = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))
s, x, y = list(map(int, input().split()))


dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
queue = deque([(x-1, y-1)])
visited = [[0] * n for _ in range(n)]
visited[x-1][y-1] = 1
if arr[x-1][y-1]:
    print(arr[x-1][y-1])
    exit()

while queue and s > 0:
    next_queue = deque([])
    candi = []

    for q in queue:
        x, y = q
        for dir in dirs:
            nx, ny = x + dir[0], y + dir[1]
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                visited[nx][ny] = 1
                next_queue.append((nx, ny))
    queue = next_queue

    for q in queue:
        x, y = q
        if arr[x][y] != 0:
            candi.append(arr[x][y])
    if candi:
        # print(candi)
        print(min(candi))
        exit()
    s -= 1
    # print(queue)

print(0)

# while s > 0:
#     checked = [[0]*n for _ in range(n)]
#     for virus in range(1, k+1):

#         for i in range(n):
#             for j in range(n):
#                 if arr[i][j] != virus or checked[i][j]:
#                     continue

#                 for dir in dirs:
#                     ni, nj = i + dir[0], j + dir[1]
#                     if 0 <= ni < n and 0 <= nj < n and not checked[ni][nj] and not arr[ni][nj]:
#                         checked[ni][nj] = 1
#                         arr[ni][nj] = virus
#     # print(arr)
#     s -= 1

# print(arr[x-1][y-1])
