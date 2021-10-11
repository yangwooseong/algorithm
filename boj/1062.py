n, k = list(map(int, input().split()))
if k < 5:
    print(0)
    exit()

words = []
for _ in range(n):
    words.append([ord(x) - ord('a') for x in input()])

must_have = 'antatica'
alphabets = set()
for char in must_have:
    alphabets.add(ord(char) - ord('a'))

for word in words:
    for alphabet in word:
        alphabets.add(alphabet)

alphabets = sorted(list(alphabets))
if k > len(alphabets):
    k = len(alphabets)

visited = [ord(char) - ord('a') for char in 'antic']
ans = 0


def get_combination(idx, cnt):
    global ans
    if len(visited) == k:
        # print(visited)
        readable_word = 0
        for word in words:
            for i in range(len(word)):
                if word[i] not in visited:
                    break
                if i == len(word) - 1:
                    readable_word += 1
        ans = max(ans, readable_word)

        return

    for i in range(idx, len(alphabets)):
        if alphabets[i] not in visited:
            visited.append(alphabets[i])
            get_combination(i+1, cnt+1)
            visited.pop()


get_combination(0, 0)
print(ans)
