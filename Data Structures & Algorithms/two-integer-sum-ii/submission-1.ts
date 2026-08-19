class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const set = new Set()
        const map = new Map()
        const out = []
        for(let i = 0; i < numbers.length; i++) {
            map.set(numbers[i], map.get(numbers[i]) ? map.get(numbers[i]) + 1: 1)
        }
        let left = 0 
        let right = numbers.length - 1 
        while(left < right) {
            const sum = numbers[left] + numbers[right]
            if(sum === target) {
                out.push(left + 1,right + 1)
                left++
            } else if(sum < target) {
                left++
            } else{
                right--
            }
        }
        return out 
    }
}
