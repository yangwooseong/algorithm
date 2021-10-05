import sys
input = sys.stdin.readline

n = int(input())
m = int(input())

# 참고한 코드
# possible_nums = {str(i) for i in range(10)}
# if m > 0:
#     possible_nums -= set(map(str, input().split()))

# current_channel = 100
# min_count = abs(n - current_channel)

# for channel in range(10**6):
#     for i in range(len(str(channel))):
#         if str(channel)[i] not in possible_nums:
#             break

#         if i == len(str(channel)) - 1:
#             min_count = min(min_count, abs(channel - n) + len(str(channel)))
# print(min_count)
# print(broken_nums)

# 내 코드 -- 10**6까지 iterate하는 게 아니라 목표 채널에서 양쪽으로 뻗어나간다.

possible_nums = {str(i) for i in range(10)}
if m > 0:
    possible_nums -= set(map(str, input().split()))

nplus, nminus = n, n
count = 0
find = False
closest_num = -1
min_count = abs(n-100)

while True:
    for i in range(len(str(nplus))):
        if str(nplus)[i] not in possible_nums:
            break
        if i == len(str(nplus)) - 1:
            closest_num = nplus
            find = True

    for i in range(len(str(nminus))):
        if str(nminus)[i] not in possible_nums:
            break
        if i == len(str(nminus)) - 1:
            closest_num = nminus
            find = True

    if nminus == 100 or nplus == 100:
        count = abs(n - 100)
        break
    if find:
        break

    count += 1
    nplus += 1
    nminus -= 1

if n == 100:
    print(0)
elif find:
    print(min(min_count, count + len(str(closest_num))))
    # print(closest_num)
elif not find:
    print(count)
