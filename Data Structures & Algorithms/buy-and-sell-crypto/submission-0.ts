class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices: number[]): number {
        let max_profit = 0
        for(let i = 0; i < prices.length - 1; i++) {
            // now we need to minimize sell_day. We can call it our min, then we need to find the highest price day lets call it max. The profit: max - min. 
            // we check if the sell_day is less than previous day if yes we swap. We check if the max is bigger than previous day, if yes we swap. 
            // now one thing lets imagine [1,2,3,1,6,4], so the min = 1, max = 6, ok lets implement and test the edge cases
            // lets imagine [2,2,5,5,1,1] so the min would 1 however as you can see we need to make sure that the following days has enough profit to support it.
            // in my case brute force would be the obvious solution so lets try it.
                for(let j = i; j < prices.length; j++) {
                    max_profit = Math.max(max_profit, prices[j] - prices[i])
                }
            }
            return max_profit
        }
    }
