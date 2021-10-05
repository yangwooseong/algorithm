import sys
input = sys.stdin.readline
arr = []

for _ in range(9):
    arr.append(int(input()))

heights = []
find = False
for i in range(9):
    for j in range(i+1, 9):
        for k in range(9):
            if k == i or k == j or find:
                continue
            heights.append(arr[k])
        if sum(heights) == 100:
            find = True
        else:
            heights = []

heights.sort()
for h in heights:
    print(h)
