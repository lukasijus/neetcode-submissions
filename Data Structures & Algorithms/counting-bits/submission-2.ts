class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const arr = []
        for(let i = 0; i <= n; i++) {
            let b:number[] = i.toString(2).split("").map(Number)
            let count = 0 
            for(let j = 0; j < b.length; j++) {
                if(b[j] & 1) {
                    count++
                }
            }
            arr.push(count)

            
        }
    
    return arr
    }
}
