import sys
input = sys.stdin.readline

alpabet = 'abcdefghijklmnopqrstuvwxyz'
word = input()
for char in alpabet:
    print(word.find(char), end=' ')
