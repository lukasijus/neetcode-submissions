class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const map = new Map()
        for(let i = 0; i < nums.length; i++) {
            map.get(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1)  : map.set(nums[i], 1)
        }
        const arr = []
        for(const [key,value] of map) {
            if(value > nums.length / 3) {
                arr.push(key)
            }
        }
        return arr 
    }
}
