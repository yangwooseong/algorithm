from collections import deque
import sys
input = sys.stdin.readline
n = int(input())


def get_positions():
    me, fire = [], []
    for i in range(h):
        for j in range(w):
            if arr[i][j] == '*':
                fire.append((i, j))
            elif arr[i][j] == '@':
                me.append((i, j))

    return me, fire


def spread_and_move(me, fire):
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
    fire_queue = deque(fire)
    person_queue = deque(me)
    time = 0
    while person_queue:
        next_person_queue = deque()
        for m in person_queue:
            x, y = m
            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]
                if nx in [-1, len(arr)] or ny in [-1, len(arr[0])]:
                    print(time+1)
                    return

                if 0 <= nx < h and 0 <= ny < w and\
                        arr[nx][ny] != '#' and arr[nx][ny] != '*' and arr[nx][ny] != '@':
                    FIRE = False
                    for d_ in range(4):
                        nnx, nny = nx + dx[d_], ny + dy[d_]
                        if 0 <= nnx < h and 0 <= nny < w and arr[nnx][nny] == '*':
                            FIRE = True
                            break
                    if not FIRE:
                        arr[nx][ny] = '@'
                        next_person_queue.append((nx, ny))
        person_queue = next_person_queue

        next_fire_queue = deque()
        for f in fire_queue:
            x, y = f
            for d in range(4):
                nx, ny = x + dx[d], y + dy[d]
                if 0 <= nx < h and 0 <= ny < w and arr[nx][ny] != '#' and arr[nx][ny] != '*':
                    arr[nx][ny] = '*'
                    next_fire_queue.append((nx, ny))
        fire_queue = next_fire_queue

        time += 1
        # print(person_queue, 'person')
        # print(fire_queue, 'fire')

    print('IMPOSSIBLE')


for _ in range(n):
    w, h = map(int, input().rstrip().split())
    arr = [list(input().rstrip()) for _ in range(h)]
    me, fire = get_positions()
    spread_and_move(me, fire)
