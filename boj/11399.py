import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
arr.sort()
sum = 0
for i in range(len(arr)):
    sum += (n-i)*arr[i]

print(sum)
