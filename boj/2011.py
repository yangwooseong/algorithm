code = list(map(int, input()))
dp = [0] * len(code)
dp[0] = 1

if code[0] == 0:
    print(0)
    exit()

for i in range(1, len(code)):
    if code[i] == 0:
        if code[i-1] not in [1, 2]:
            print(0)
            exit()
        else:
            if i == 1:
                dp[i] = dp[i-1]
            else:
                dp[i-1] = dp[i-2]
                dp[i] = dp[i-1]
    elif 10 * code[i-1] + code[i] > 26:
        dp[i] = dp[i-1]
    elif code[i-1] == 0:
        dp[i] = dp[i-1]
    else:
        if i == 1:
            dp[i] = 2
        else:
            dp[i] = dp[i-2] + dp[i-1]
            dp[i] %= 1000000
# print(dp)
print(dp[-1])
