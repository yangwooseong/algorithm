import sys
input = sys.stdin.readline

n = int(input())
for _ in range(n):
    words = input().split()
    for i in range(len(words)):
        words[i] = words[i][::-1]
    for word in words:
        print("%s" % word, end=' ')
    print()
