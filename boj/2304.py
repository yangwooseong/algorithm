import sys
input = sys.stdin.readline

n = int(input())
arr = []
for i in range(n):
    arr.append(list(int(x) for x in input().split()))
arr.sort(key=lambda x: x[0])

arr = [[0, 0]] + arr + [[0, 0]]
stack = [0]
area = 0

for i in range(1, len(arr)):
    cur = None
    while stack and arr[stack[-1]][1] > arr[i][1]:
        height = arr[stack[-1]][1]
        last = stack.pop()
        cur = arr[i][0] if cur is None else arr[last][0]
        print(i, cur)
        width = cur - arr[stack[-1]][0] - 1

        area += width * height
        print(area)
    stack.append(i)
