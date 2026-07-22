class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
            let start = 0
            let end = nums.length -1
            while(end >= start) {
                const mid = (start + end ) % 2 === 0 ? (start + end ) / 2 : (start + end + 1) / 2 
                console.log("mid", mid, "start", start, "end", end )

                if(target > nums[mid]) {
                    start = mid + 1
                }
                if(target < nums[mid]) {
                    end = mid - 1
                }
                if(target === nums[mid]){
                    return mid
                }
            }
            return -1
    }
}
