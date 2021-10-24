word = sorted(list(input()))
word_ords = [0 for _ in range(26)]
for c in word:
    word_ords[ord(c) - ord('A')] += 1

if len(list(filter(lambda x: x % 2 == 1, word_ords))) > 1:
    print('I\'m Sorry Hansoo')
    exit()

ans = ['' for _ in range(len(word))]
idx = 0
for i, n in enumerate(word_ords):
    while n > 0:
        char = chr(ord('A') + i)
        if n != 1:
            ans[idx] = char
            ans[len(ans) - idx - 1] = char
            n -= 2
            idx += 1
        else:
            ans[len(word)//2] = char
            n -= 1
        # print(ans)

for c in ans:
    print(c, end='')
