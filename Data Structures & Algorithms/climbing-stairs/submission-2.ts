class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n <= 3) return n 
        const dp = [2,3]
        for(let i = 4; i <= n; i++) {
            const temp = dp[1]
            dp[1] = dp[0] + dp[1]
            dp[0] = temp 
        }
        return dp[1]
        }
    
}
