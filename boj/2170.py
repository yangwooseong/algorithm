import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
arr.sort(key=lambda x: x[0])

lines = [arr[0]]
for i in range(1, len(arr)):
    for j in range(len(lines)):
        start, end = lines[j]
        if start <= arr[i][0] <= end:
            lines[j][1] = max(lines[j][1], arr[i][1])
            break
        if j == len(lines) - 1:
            lines.append(arr[i])
    # print(lines)

length = 0
for line in lines:
    length += line[1] - line[0]
print(length)
