import sys
input = sys.stdin.readline
n, s = list(map(int, input().split()))
arr = list(map(int, input().split()))
ans = 0

# bitmask 를 이용한 풀이

for i in range(1 << n):
    sum = None
    for k in range(n):
        if i & (1 << k):
            sum = sum + arr[k] if sum else arr[k]
    if sum == s:
        ans += 1

print(ans)
