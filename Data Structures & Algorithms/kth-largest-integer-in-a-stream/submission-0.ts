class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    k:number 
    nums: number[]
    set: Set<number>
    length: number
    
    constructor(k: number, nums: number[]) {
        this.k = k 
        this.nums = nums
        this.nums.sort((a,b) => a - b)
        this.set = new Set(nums)
        this.length = nums.length
        
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.nums.push(val)
        this.nums.sort((a,b) => a - b)
        return this.nums[this.nums.length - this.k]  
    }
}
