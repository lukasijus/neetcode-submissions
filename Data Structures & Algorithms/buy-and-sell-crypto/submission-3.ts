class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices: number[]): number {
        let max_profit = 0
        let buy_day_index = 0
        let sell_day_index = 1
        let i = 1
        while(i <= prices.length) {
            if(prices[sell_day_index] === undefined) break; 
            max_profit = Math.max(max_profit, prices[sell_day_index] - prices[buy_day_index])
            // update min 
            if(prices[buy_day_index] > prices[i]) {
                buy_day_index = i
                sell_day_index = i + 1
            } 
            // update max
            if(prices[sell_day_index] < prices[i]) {
                sell_day_index = i
            }
            //console.log("max_profit", max_profit, "sell_day_index", sell_day_index, "buy_day_index", buy_day_index, prices[sell_day_index])
            i++
            
        }
            return max_profit > 0 ? max_profit : 0
        }
    }
