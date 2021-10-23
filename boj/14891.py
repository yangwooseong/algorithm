from collections import deque

gears = {}
for i in range(1, 5):
    gears[i] = deque(list(map(int, list(input()))))


def check_right(start, dir):
    if start > 4 or gears[start-1][2] == gears[start][6]:
        return

    check_right(start+1, -dir)
    gears[start].rotate(dir)


def check_left(start, dir):
    if start == 0 or gears[start][2] == gears[start+1][6]:
        return

    check_left(start-1, -dir)
    gears[start].rotate(dir)


k = int(input())

for _ in range(k):
    n, d = list(map(int, input().split()))

    check_right(n+1, -d)
    check_left(n-1, -d)
    gears[n].rotate(d)

ans = 0
for i in range(1, 5):
    ans += (1 << (i-1)) * gears[i][0]
    # print(ans)
print(ans)
