class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let max = 0 
        const count = new Map() 
        let l = 0 
        let bank = 0 
        for(let r = 0; r < s.length; r++) {
            count.set(s[r], count.get(s[r]) ? count.get(s[r]) + 1 : 1)
            bank = Math.max(bank, count.get(s[r]))
            while(r - l + 1 - bank > k) {
                count.set(s[l], count.get(s[l]) - 1)
                l++
            }
            max = Math.max(max, r-l+1)
        }
        return max
    }
}
