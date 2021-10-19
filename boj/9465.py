t = int(input())
for _ in range(t):
    n = int(input())
    arr = []
    arr.append(list(map(int, input().split())))
    arr.append(list(map(int, input().split())))

    dp = [[0, 0] for _ in range(n)]
    dp[0] = [arr[0][0], arr[1][0]]

    for i in range(1, n):
        if i == 1:
            dp[i][0] = dp[i-1][1] + arr[0][i]
            dp[i][1] = dp[i-1][0] + arr[1][i]
        else:
            dp[i][0] = max(dp[i-1][1] + arr[0][i],
                           max(dp[i-2]) + arr[0][i])
            dp[i][1] = max(dp[i-1][0] + arr[1][i],
                           max(dp[i-2]) + arr[1][i])
    print(max(dp[-1]))
