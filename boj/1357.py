import sys
input = sys.stdin.readline


def rev(x):
    return int(x[::-1])


a, b = input().split()
print(rev(str(rev(a) + rev(b))))
