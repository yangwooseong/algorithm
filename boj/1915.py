import sys
import copy
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [list(map(int, list(input().rstrip()))) for _ in range(n)]
dp = copy.deepcopy(arr)


def check(x, y, l):
    for k in range(l):
        if arr[x][y-k-1] == 0 or arr[x-k-1][y] == 0:
            return k + 1
    return l + 1


for i in range(1, n):
    for j in range(m):
        ni, nj = i-1, j-1
        if 0 <= ni < n and 0 <= nj < m and dp[i][j] and dp[ni][nj]:
            dp[i][j] = check(i, j, dp[ni][nj])
    # print(dp)

M = 0
for r in dp:
    M = max(M, max(r))
print(M*M)
