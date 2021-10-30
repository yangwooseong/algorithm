import copy
import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

r, c = list(map(int, input().rstrip().split()))
arr = [list(map(int, input().rstrip().split())) for _ in range(r)]
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]


def melt(arr):
    # next_arr = copy.deepcopy(arr)
    next_arr = [[0] * c for _ in range(r)]

    for x in range(r):
        if x in [0, r-1]:
            continue
        for y in range(c):
            if y in [0, c-1]:
                continue
            if arr[x][y] == 0:
                continue

            next_arr[x][y] = arr[x][y]
            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]
                if 0 <= nx < r and 0 <= ny < c and arr[nx][ny] == 0:
                    next_arr[x][y] -= 1
                if next_arr[x][y] == 0:
                    break

    return next_arr


def is_more_than_two_iceberg(arr):
    visited = [[0] * c for _ in range(r)]

    def dfs(x, y, visited):
        for d in range(4):
            nx, ny = x + dx[d], y + dy[d]
            if 0 <= nx < r and 0 <= ny < c and not visited[nx][ny] and arr[nx][ny]:
                visited[nx][ny] = 1
                dfs(nx, ny, visited)

    cnt = 0
    for x in range(r):
        for y in range(c):
            if arr[x][y] != 0 and not visited[x][y]:
                visited[x][y] = 1
                dfs(x, y, visited)
                cnt += 1
                # print(cnt, x, y)
            if cnt >= 2:
                return True

    return False


def is_all_melted(arr):
    for i in range(r):
        for j in range(c):
            if not arr[i][j]:
                return False
    return True


ans = 0
while not is_all_melted(arr):
    if is_more_than_two_iceberg(arr):
        flag = 1
        break
    arr = melt(arr)
    ans += 1

if flag:
    print(ans)
else:
    print(0)


# from collections import deque
# import copy
# import sys
# input = sys.stdin.readline
# dx = [1, -1, 0, 0]
# dy = [0, 0, -1, 1]
# n, m = map(int, input().split())
# s = []


# def bfs(i, j):
#     q = deque()
#     q.append([i, j])
#     visit = [[0] * m for i in range(n)]
#     visit[i][j] = 1
#     while q:
#         a, b = q.popleft()
#         for k in range(4):
#             x = a + dx[k]
#             y = b + dy[k]
#             if 0 <= x < n and 0 <= y < m and visit[x][y] == 0 and temp[x][y] != 0:
#                 temp[x][y] = 0
#                 visit[x][y] = 1
#                 q.append([x, y])


# def check(i, j):
#     cnt = 0
#     for k in range(4):
#         x = i + dx[k]
#         y = j + dy[k]
#         if 0 <= x < n and 0 <= y < m and t[x][y] == 0:
#             cnt += 1
#     return cnt


# def checkz():
#     for i in range(n):
#         for j in range(m):
#             if s[i][j] != 0:
#                 return False
#     return True


# for i in range(n):
#     s.append(list(map(int, input().split())))
# result = 1
# while True:
#     if checkz():
#         print(0)
#         break
#     t = copy.deepcopy(s)
#     for i in range(n):
#         for j in range(m):
#             if t[i][j] != 0:
#                 temp = s[i][j] - check(i, j)
#                 s[i][j] = temp if temp >= 0 else 0
#     temp = copy.deepcopy(s)
#     cnt = 0
#     for i in range(n):
#         for j in range(m):
#             if temp[i][j] != 0:
#                 temp[i][j] = 0
#                 bfs(i, j)
#                 cnt += 1
#     if cnt > 1:
#         print(result)
#         break
#     result += 1
