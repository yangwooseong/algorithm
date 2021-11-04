import sys
T = int(sys.stdin.readline())
k = int(sys.stdin.readline())
coin = [list(map(int, sys.stdin.readline().split())) for _ in range(k)]
dy = [[0]*(T+1) for _ in range(k+1)]
dy[0][0] = 1

for i in range(1, k+1):  # 동전 종류
    for tt in range(T+1):
        dy[i][tt] = dy[i - 1][tt]
    for j in range(1, coin[i-1][1]+1):  # 각 동전개수
        for index in range(j*coin[i-1][0], T+1):
            dy[i][index] += dy[i-1][index-j*coin[i-1][0]]
print(dy[k][T])
