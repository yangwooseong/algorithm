import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = [list(map(int, input().split())) for _ in range(n)]
moves = [list(map(int, input().split())) for _ in range(m)]
dx = [0, -1, -1, -1, 0, 1, 1, 1]
dy = [-1, -1, 0, 1, 1, 1, 0, -1]
clouds = [(n-1, 0), (n-1, 1), (n-2, 0), (n-2, 1)]

for i in range(len(moves)):
    d, s = moves[i]
    for j in range(len(clouds)):
        cx, cy = clouds[j]
        cx, cy = cx + s*dx[d-1], cy + s*dy[d-1]
        cx, cy = cx % n, cy % n
        clouds[j] = (cx, cy)
        arr[cx][cy] += 1
    # print(arr)
    for j in range(len(clouds)):
        cnt = 0
        cx, cy = clouds[j]
        for dir in [(1, 1), (1, -1), (-1, 1), (-1, -1)]:
            nx, ny = cx + dir[0], cy + dir[1]
            if 0 <= nx < n and 0 <= ny < n and arr[nx][ny]:
                cnt += 1
        arr[cx][cy] += cnt

    new_clouds = []
    for k in range(n):
        for l in range(n):
            if (k, l) not in clouds and arr[k][l] >= 2:
                arr[k][l] -= 2
                new_clouds.append((k, l))
    clouds = new_clouds[:]
    # print(new_clouds)
    # print(arr)

ans = 0
for i in range(n):
    ans += sum(arr[i])

print(ans)
