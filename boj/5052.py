import sys
input = sys.stdin.readline
t = int(input().rstrip())


def check(arr):
    for i in range(len(arr)-1):
        if arr[i] == arr[i+1][0:len(arr[i])]:
            return 'NO'
    return 'YES'


for _ in range(t):
    n = int(input().rstrip())
    arr = [input().rstrip() for _ in range(n)]
    arr.sort()
    # print(arr)
    print(check(arr))
