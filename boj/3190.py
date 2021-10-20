from collections import deque
n = int(input())
k = int(input())
orders = []

arr = [[0 for _ in range(n)] for _ in range(n)]
for _ in range(k):
    i, j = list(map(int, input().split()))
    arr[i-1][j-1] = 1 # 사과

for _ in range(int(input())):
    orders.append(input().split())

x, y = 0, 0
dx = [0, -1, 0, 1]
dy = [1, 0, -1, 0]
dir = 0 

snakes = deque([(0,0)])
sec = 0
while True:
    sec += 1
    x, y = x + dx[dir], y + dy[dir]
    if (x, y) in snakes or x in [-1, n] or y in [-1, n]:
        break
    snakes.append((x, y))
    if arr[x][y] != 1:
        snakes.popleft()
    else:
        arr[x][y] = 0

    # print(snakes, dir, orders, i)
    if not orders or orders[0][0] != str(sec):
        continue
    if orders.pop(0)[1] == 'L':
        dir = (dir + 1) % 4
    else:
        dir = (dir + 3) % 4
    

print(sec)