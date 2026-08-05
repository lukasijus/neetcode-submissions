class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n: number): number {
        let ans = 0 
        const ns = n.toString(2).split("")
        let j = 0 
        for(let i = 31; i > -1; i--) {
            //console.log(ns[i], ans , i, ns)
            if(ns[ns.length - 1-j] === "1") {
                ans+=2**i
            }
               j++
               if(j >= ns.length) break;
            
        }
        return ans 
    }

}
