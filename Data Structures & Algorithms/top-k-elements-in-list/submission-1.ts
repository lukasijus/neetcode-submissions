class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const ans: number[] = [] 
        const map = new Map<number, number>()
        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1 )
        }
        const tmp:number[][] = [] 
        for(const [key, value] of map) {
            tmp.push([key,value])
        }
        tmp.sort((a,b) => b[1] - a[1])   
        for(let i = 0; i < tmp.length; i++) {
            ans.push(tmp[i][0])
            if(ans.length === k) return ans
        }
    }
}
