import sys
input = sys.stdin.readline

while True:
    sentence = input().rstrip('\n')
    up, lo, sp, num = 0, 0, 0, 0
    if not sentence:
        break
    for char in sentence:
        if char.isupper():
            up += 1
        elif char.islower():
            lo += 1
        elif char.isdigit():
            num += 1
        elif char.isspace():
            sp += 1

    print("{} {} {} {}".format(lo, up, num, sp))
