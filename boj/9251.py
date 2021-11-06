word1 = input()
word2 = input()
dp = [[''] * (len(word2)+1) for _ in range(len(word1)+1)]

for i in range(1, len(word1)+1):
    for j in range(1, len(word2)+1):
        if word1[i-1] == word2[j-1]:
            dp[i][j] = dp[i-1][j-1] + word1[i-1]
        else:
            len1 = len(dp[i-1][j])
            len2 = len(dp[i][j-1])
            dp[i][j] = dp[i-1][j] if len1 > len2 else dp[i][j-1]

print(len(dp[-1][-1]))
# print(dp[-1][-1])