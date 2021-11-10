from collections import deque
import sys
input = sys.stdin.readline

n, w, l = map(int, input().split())
arr = deque(list(map(int, input().split())))
bridge = [0 for _ in range(w)]
bridge[-1] = arr.popleft()
step = 1

while arr or sum(bridge) != 0:
    if not arr:
        bridge = bridge[1:] + [0]
    elif arr and sum(bridge) + arr[0] <= l:
        bridge = bridge[1:] + [arr.popleft()]
    else:
        bridge = bridge[1:] + [0]
        if arr and sum(bridge) + arr[0] <= l:
            bridge[-1] = arr.popleft()
    step += 1
    # print(step, bridge, arr)
print(step)
