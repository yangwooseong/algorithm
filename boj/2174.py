a, b = list(map(int, input().split()))
n, m = list(map(int, input().split()))
dirs = {'S': 0, 'E': 1, 'N': 2, 'W': 3}
dy, dx = (-1, 0, 1, 0), (0, 1, 0, -1)
arr = [[0] * (a+1) for _ in range(b+1)]
robots_info = [[0, 0, 0] for _ in range(n+1)]


def solve(i, d, c):
    x, y, z = robots_info[i]
    for _ in range(c):
        arr[y][x] = 0
        if d == 'L':
            z = (z + 1) % 4
        elif d == 'R':
            z = (z - 1) % 4
        else:
            x, y = x + dx[z], y + dy[z]
            if x in [0, a+1] or y in [0, b+1]:
                print("Robot %d crashes into the wall" % i)
                exit()
            if arr[y][x]:
                print("Robot %d crashes into robot %d" % (i, arr[y][x]))
                exit()
        robots_info[i] = [x, y, z]
        arr[y][x] = i
        # print(arr, robots_info)
    return False


for i in range(1, n+1):
    x, y, z = input().split()
    arr[int(y)][int(x)] = i
    robots_info[i] = [int(x), int(y), dirs[z]]

crash = False
for _ in range(m):
    i, d, c = input().split()
    if not crash:
        crash = solve(int(i), d, int(c))
if not crash:
    print('OK')
