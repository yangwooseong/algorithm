from collections import defaultdict
import sys
input = sys.stdin.readline

dict = defaultdict(int)
total = 0
while True:
    tree = input().rstrip()
    if not tree:
        break
    if tree:
        total += 1
        dict[tree] += 1


for key in sorted(dict.keys()):
    print('%s %.4f' % (key, 100*dict[key]/total))
