import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = []

for _ in range(n):
    arr.append(list(map(int, input().rstrip().split())))

dirs = [(0, 1), (1, 0), (-1, 0), (0, -1)]
visited = [[0 for _ in range(m)] for _ in range(n)]
exceptions = [[[0, 1], [0, 2], [-1, 1]], [[0, 1], [0, 2], [1, 1]],
              [[1, 0], [2, 0], [1, 1]], [[1, 0], [1, -1], [2, 0]]]

ans = 0


def dfs(x, y, count, num):
    global ans
    if count == 4:
        ans = max(ans, num)
        return
    for dir in dirs:
        nx = x + dir[0]
        ny = y + dir[1]
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            visited[nx][ny] = 1
            dfs(nx, ny, count+1, num + arr[nx][ny])
            visited[nx][ny] = 0


for i in range(n):
    for j in range(m):
        visited[i][j] = 1
        dfs(i, j, 1, arr[i][j])
        visited[i][j] = 0

        for exception in exceptions:
            tmp = arr[i][j]
            for dir in exception:
                ni = i + dir[0]
                nj = j + dir[1]
                if not (0 <= ni < n and 0 <= nj < m):
                    break
                tmp += arr[ni][nj]
                ans = max(ans, tmp)
        # print(ans)
print(ans)
