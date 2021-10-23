from sys import stdin


def get_distance(x, y):
    if x == 1:
        return y
    elif x == 2:
        return w + h + w - y
    elif x == 3:
        return w + h + w + h - y
    elif x == 4:
        return w + y


w, h = list(map(int, input().split()))
distances = []
for _ in range(int(input())+1):
    x, y = list(map(int, input().split()))
    distances.append(get_distance(x, y))

# print(distances)

ans = 0
for i in range(len(distances) - 1):
    inner = abs(distances[i] - distances[-1])
    outer = 2*(w+h) - inner
    ans += min(inner, outer)

print(ans)
