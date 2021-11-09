import sys
input = sys.stdin.readline

n = int(input())
dp_min, dp_max = [], []
for i in range(n):
    arr = list(map(int, input().split()))
    if i == 0:
        dp_min, dp_max = arr[:], arr[:]
        continue
    tmp = [0] * 3
    tmp[0] = arr[0] + min(dp_min[0], dp_min[1])
    tmp[1] = arr[1] + min(dp_min[0], dp_min[1], dp_min[2])
    tmp[2] = arr[2] + min(dp_min[1], dp_min[2])

    dp_min = tmp[:]

    tmp = [0] * 3
    tmp[0] = arr[0] + max(dp_max[0], dp_max[1])
    tmp[1] = arr[1] + max(dp_max[0], dp_max[1], dp_max[2])
    tmp[2] = arr[2] + max(dp_max[1], dp_max[2])

    dp_max = tmp[:]

print(max(dp_max), min(dp_min))
