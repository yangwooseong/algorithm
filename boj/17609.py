import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
    word = list(input().rstrip())
    start, end = 0, len(word) - 1
    is_palindrome = 0
    chance = 1
    while start < end:
        if word[start] == word[end]:
            start += 1
            end -= 1
        else:
            if not chance:
                is_palindrome = 2
                break
            if word[start + 1] == word[end] and word[start + 2] == word[end - 1]:
                start += 2
                end -= 1
            elif word[start] == word[end-1] and word[start + 1] == word[end - 2]:
                start += 1
                end -= 2
            else:
                is_palindrome = 2
                break
            chance -= 1
            is_palindrome = 1
        # print(start, end)
    print(is_palindrome)
