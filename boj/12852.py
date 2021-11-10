import sys
input = sys.stdin.readline

n = int(input())
if n == 1:
    print(0)
    print(1)
    exit()
elif n == 2:
    print(1)
    print(2, 1)
    exit()

dp = [10**6 for _ in range(n+1)]
dp[1] = 0
dp[2] = 1
dp[3] = 1

for i in range(4, n+1):
    if i % 2 == 0:
        dp[i] = min(dp[i], dp[i//2]+1)
    if i % 3 == 0:
        dp[i] = min(dp[i], dp[i//3]+1)
    dp[i] = min(dp[i], dp[i-1]+1)

print(dp[-1])
# print(dp)
while n != 1:
    print(n, end=' ')
    if n % 3 == 0 and dp[n//3] == dp[n] - 1:
        n //= 3
    elif n % 2 == 0 and dp[n//2] == dp[n] - 1:
        n //= 2
    elif dp[n-1] == dp[n] - 1:
        n -= 1
print(1)
