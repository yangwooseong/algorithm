import sys
input = sys.stdin.readline
n = int(input())
arr = list(map(int, input().split()))

left, right = 0, n-1
m = 2 * (10**9)
al, ar = 0, 0

while left < right:
    mix = arr[left] + arr[right]

    if abs(mix) < m:
        al, ar = left, right
        m = abs(mix)

    if mix == 0:
        print(arr[left], arr[right])
        exit()
    elif mix > 0:
        right -= 1
    elif mix < 0:
        left += 1

    # print(left, right)
print(arr[al], arr[ar])
