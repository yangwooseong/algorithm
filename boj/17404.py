import sys
input = sys.stdin.readline
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
MAX = 10**6
ans = MAX

for i in range(3):
    dp = [[MAX]*3 for _ in range(n)]
    dp[0][i] = arr[0][i]

    for j in range(1, n):
        dp[j][0] = arr[j][0] + min(dp[j-1][1], dp[j-1][2])
        dp[j][1] = arr[j][1] + min(dp[j-1][0], dp[j-1][2])
        dp[j][2] = arr[j][2] + min(dp[j-1][0], dp[j-1][1])

    for j in range(3):
        if j == i:
            continue
        ans = min(ans, dp[-1][j])
    # print(dp, ans)


print(ans)
