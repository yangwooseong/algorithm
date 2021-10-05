import sys
input = sys.stdin.readline

alpabet = 'abcdefghijklmnopqrstuvwxyz'
dict = {}
for char in input().rstrip():
    dict[char] = 1 if char not in dict else dict[char] + 1
for char in alpabet:
    print('%d' % dict[char]if char in dict else 0, end=' ')
