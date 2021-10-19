
def pibonacci(n):
    dp = [0 for _ in range(n+2)]

    dp[1] = 1
    dp[2] = 2
    for i in range(3, n+1):
        dp[i] = (dp[i-1] % 15746 + dp[i-2] % 15746) % 15746

    return dp[n]


print(pibonacci(int(input())))
