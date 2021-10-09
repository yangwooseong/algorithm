import sys
input = sys.stdin.readline

n = int(input())
print(bin(n)[2:].count('1'))
