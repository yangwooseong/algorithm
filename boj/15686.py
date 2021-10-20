n, m = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

chickens, houses = [], []
for i in range(n):
    for j in range(n):
        if arr[i][j] == 2:
            chickens.append((i,j))
        elif arr[i][j] == 1:
            houses.append((i,j))

# print(chickens)
combinations = []
ans = 10**5

def get_combination(idx):
    global ans

    if len(combinations) == m:
        distance = 0
        # print(houses, combinations)
        for house in houses:
            tmp = 100
            for chicken in combinations:
                tmp = min(tmp, abs(house[0] - chicken[0]) + abs(house[1] - chicken[1]))
            distance += tmp
        ans = min(ans, distance)
        return

    for i in range(idx, len(chickens)):
        combinations.append(chickens[i])
        get_combination(i+1)
        combinations.pop()

get_combination(0)
print(ans)