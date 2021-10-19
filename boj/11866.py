n, k = list(map(int, input().split()))
arr = [i for i in range(1, n+1)]

print('<', end='')
while arr:
    for _ in range(k-1):
        arr.append(arr.pop(0))
    if len(arr) != 1:
        print(arr.pop(0), end=', ')
    else:
        print(arr.pop(0), end='')
print('>')
