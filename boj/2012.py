import sys
input = sys.stdin.readline
n = int(input())
arr = sorted([int(input()) for _ in range(n)])

sum = 0
for i in range(n):
    sum += abs(i + 1 - arr[i])


print(sum)
