n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int, input())))
arr.sort(key=lambda x: x[1])

count = [0 for _ in range(1, arr[-1][1]+1)]
