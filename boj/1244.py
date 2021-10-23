import sys
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().rstrip().split()))


def switch(s, m):
    if s == 1:
        for i in range(n):
            if (i+1) % m == 0:
                arr[i] = int(not arr[i])
    else:
        m -= 1
        left, right = m-1, m+1
        arr[m] = int(not arr[m])
        while 0 <= left and right <= n-1 and arr[left] == arr[right]:
            arr[left], arr[right] = int(not arr[left]), int(not arr[right])
            left -= 1
            right += 1


for _ in range(int(input())):
    s, m = list(map(int, input().rstrip().split()))
    switch(s, m)
for i in range(n):
    if i != n-1:
        print(arr[i], end=' ')
    else:
        print(arr[i], end='')
    if (i+1) % 20 == 0:
        print()

# print()
