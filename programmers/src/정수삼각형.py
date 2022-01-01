def solution(triangle):
    dp = [0 for _ in range(len(triangle[-1]))]
    dp[0] = triangle[0][0]

    for i in range(1, len(triangle)):
        new_dp = [0 for _ in range(len(triangle[-1]) + 1)]
        for j in range(len(triangle[i])):
            if j == 0:
                new_dp[j] = triangle[i][j] + dp[j]
            else:
                new_dp[j] = triangle[i][j] + max(dp[j], dp[j-1])
        dp = new_dp
        # print(new_dp)

    return max(dp)

    # return answer


triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
print(solution(triangle))
