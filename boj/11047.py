import sys
input = sys.stdin.readline

n, k = list(map(int, input().split()))
coins = []

for _ in range(n):
    coins.append(int(input()))

i = len(coins)
count = 0
while k > 0:
    if k - coins[i-1] < 0:
        i -= 1
    else:
        num = k // coins[i-1]
        k -= num * coins[i-1]
        count += num

print(count)
