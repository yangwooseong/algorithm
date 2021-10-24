n = int(input())
compare = list(input())
ans = 0

for _ in range(n-1):
    compare_word = compare[:]
    check_word = list(input())
    for _ in range(len(check_word)):
        a = check_word.pop(0)
        if a in compare_word:
            compare_word.remove(a)
        else:
            check_word.append(a)
    m = len(compare_word)
    n = len(check_word)
    s = (m, n)
    if s == (0, 0) or s == (1, 0) or s == (0, 1) or s == (1, 1):
        ans += 1
print(ans)
