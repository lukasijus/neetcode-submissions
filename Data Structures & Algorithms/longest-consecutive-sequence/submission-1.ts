class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0) return 0
        nums.sort((a,b) => a - b) 
        const set = new Set(nums)
        const arr = Array.from(set)
        //console.log("arr",arr)
        let max = 1
        let tmp = 1
        for(let i = 0; i < arr.length - 1; i++) {
            //console.log(arr[i], arr[i + 1], arr[i] === arr[i +1] - 1)
            if(arr[i] == arr[i + 1] - 1) {
                tmp++
            } else {
                max = Math.max(max,tmp)
                tmp=1
            }
        }
        return Math.max(max, tmp)
    }
}
