# import sys

# input = sys.stdin.readline
# n = int(input())
# arr = list(input())

# s = [[0]*n for _ in range(n)]

# for i in range(n):
#     for j in range(i, n):
#         s[i][j] = arr.pop(0)

# nums = list(range(-10, 11, 1))
# visited = [0 for _ in range(len(nums))]
# permutation = []

# print(s)


# def get_permutation(cnt):
#     if cnt == n:
#         print(permutation)
#         return

#     for i in range(len(nums)):
#         if visited[i]:
#             continue
#         elif s[cnt][cnt] == '+' and nums[i] <= 0:
#             continue
#         elif s[cnt][cnt] == '-' and nums[i] >= 0:
#             continue

#         visited[i] = 1
#         permutation.append(nums[i])
#         get_permutation(cnt+1)
#         visited[i] = 0
#         permutation.pop()


# get_permutation(0)
