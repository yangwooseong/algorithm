import sys
input = sys.stdin.readline
word = input().rstrip()


arr = []
for i in range(len(word)):
    arr.append(word[i:])

arr.sort()
for prefix in arr:
    print(prefix)
