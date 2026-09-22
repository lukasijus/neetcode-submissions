class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const memo: Map<number, number> = new Map()

        function dfs(index: number) {
            if(index >= cost.length) {
                return 0
            }

            if(memo.has(index)) {
                return memo.get(index)
            }
            const result = cost[index] + Math.min(dfs(index + 1), dfs(index + 2))

            memo.set(index, result)
            return result
        }

        return Math.min(dfs(0), dfs(1))
    }
}