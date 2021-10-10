# import sys
# input = sys.stdin.readline
# n = int(input())

# arr = []

# alphabets = ''
# for _ in range(n):
#     alphabets += input().rstrip()

# length = len(set(alphabets))


# def get_permutation(cnt):
#     if cnt == length:
#         print(arr)
#         return

#     for i in range(1, 10):
#         if i not in arr:
#             arr.append(i)
#             get_permutation(cnt+1)
#             arr.pop()


# get_permutation(0)

# 중요도와 greedy algorithm

n = int(input())
words = []
for _ in range(n):
    words.append(input())

alphabet = [0 for _ in range(26)]

for word in words:
    for idx, char in enumerate(word[::-1]):
        alphabet[ord(char) - ord('A')] += pow(10, idx)

alphabet.sort(reverse=True)
ans = 0
for i in range(9, 0, -1):
    ans += i * alphabet[9-i]
print(ans)
