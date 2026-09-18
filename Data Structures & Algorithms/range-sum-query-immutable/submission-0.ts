class NumArray {
    /**
     * @param {number[]} nums
     */
    nums:number[]
    constructor(nums: number[]) {
        this.nums = nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        const arr = this.nums.slice(left,right+1)
        console.log(arr)
        return arr.reduce((a,b) => a + b )
    }
}
