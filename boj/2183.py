n = int(input())
a = list(map(int, list(input())))
b = list(map(int, list(input())))
ans = 0

first_flip = a[:]
first_not_flip = a[:]

for i in range(2):
    # 첫 번째 키는 경우 안 키는 경우 가능한 결과값이 달라서 나눠야 함.
    # 마지막 키는 경우 안키는 경우는 포함되기 때문에 고려 안해도 됨.
    # i == 0: 첫번째 flip X, i == 1: 첫번째 flip
    a = first_flip if i != 0 else first_not_flip
    cnt = 0
    for j in range(n):
        if j == 0 and i != 0 and a != b:
            a[j], a[j+1] = 1-a[j], 1-a[j+1]
            cnt += 1
        elif 0 < j < n-1 and a[j-1] != b[j-1]:
            a[j-1], a[j], a[j+1] = 1 - a[j-1], 1 - a[j], 1 - a[j+1]
            cnt += 1
        elif j == n-1 and a[j-1] != b[j-1]:
            a[j], a[j-1] = 1 - a[j], 1 - a[j-1]
            cnt += 1
        # print(a, j)
    if a == b:
        print(cnt)
        break

if a != b:
    print(-1)
