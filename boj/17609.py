import sys
input = sys.stdin.readline

n = int(input())


def second_check(word, left, right):
    while left < right:
        if word[left] == word[right]:
            left += 1
            right -= 1
        else:
            return False
    return True


for _ in range(n):
    word = input().rstrip()
    start, end = 0, len(word)-1
    while start < end:
        if word[start] == word[end]:
            start += 1
            end -= 1
        elif word[start] != word[end]:
            check1 = second_check(word, start+1, end)
            check2 = second_check(word, start, end-1)
            if check1 or check2:
                print(1)
            else:
                print(2)
            break

    if start >= end:
        print(0)
