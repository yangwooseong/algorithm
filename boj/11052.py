# import sys
# input = sys.stdin.readline


# can't apply greedy algorithm
# e.g. n = 10, 1 1 1 1 10 13

# n = int(input())
# cards = [[int(x)] for x in input().split()]
# for i in range(len(cards)):
#     cards[i].append(cards[i][0] / (i+1))
#     cards[i].append(i+1)
# cards.sort(key=lambda x: x[1], reverse=True)
# # print(cards)

# idx = 0
# sum = 0
# while n > 0:
#     if cards[idx][2] > n:
#         idx += 1
#         continue

#     num = n // cards[idx][2]
#     n -= num * cards[idx][2]
#     sum += cards[idx][0] * num
#     print(num, sum, n, cards[idx][2])
# print(sum)


n = int(input())
dp = [0 for _ in range(n)]
arr = list(map(int, input().split()))
dp[0] = arr[0]

for i in range(1, n):
    for j in range(0, i):

        dp[i] = max(dp[i-j-1] + arr[j], dp[i], arr[i])
print(dp[-1])
