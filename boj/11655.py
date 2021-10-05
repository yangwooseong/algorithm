import sys
input = sys.stdin.readline

upper_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lower_alpha = upper_alpha.lower()

for char in input().rstrip():
    if char.isupper():
        print(upper_alpha[(upper_alpha.find(char) + 13) % 26], end='')
    elif char.islower():
        print(lower_alpha[(lower_alpha.find(char) + 13) % 26], end='')
    else:
        print(char, end='')
