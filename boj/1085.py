import sys
input = sys.stdin.readline


def minimum_distance(arr):
    x, y, w, h = arr

    return min(x, abs(w-x), y, abs(h-y))


arr = [int(a) for a in input().strip('\n').split()]
# print(arr)
print(minimum_distance(arr))
