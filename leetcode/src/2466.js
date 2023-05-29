/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    const dp = new Array(high+1).fill(0)
    const mod = 10**9 + 7
    dp[0] = 1

    for (let i=1;i<high+1;i++) {
        dp[i] += (dp[i-zero] ?? 0)
        dp[i] += (dp[i-one] ?? 0)

        dp[i] %= mod
    }

    return dp.slice(low, high+1).reduce((a, b) => (a + b) % mod)
};