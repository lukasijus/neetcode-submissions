class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const arr = []
        for(let i = 0; i <= n; i++) {
            let b = i.toString(2)

            arr.push(b.split("").filter((x)=> x === "1").length)
        }
    
    return arr
    }
}
