from collections import deque

n = int(input())
arr = list(map(int, input().split()))
temp = []
temp.append(min(arr[0], arr[5]))
temp.append(min(arr[1], arr[4]))
temp.append(min(arr[2], arr[3]))
temp.sort()
a, b, c = temp[0], temp[1], temp[2]
a, b, c = a, a+b, a+b+c
side_1 = 4*(n-2)*(n-1) + (n-2)**2
side_2 = 4*(n-2) + 4*(n-1)
side_3 = 4
if n == 1:
    print(sum(sorted(arr)[:5]))
else:
    print(a*side_1 + b*side_2 + c*side_3)