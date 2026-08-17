class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0
        let right = 1
        if(s.length <= 1 ) return s.length
        let set = new Set(s[0])
        let max = 0 
        while(right < s.length) {
            if(set.has(s[right])) {
                set.delete(s[left])
                left++
            }
            else if(!set.has(s[right])){
                set.add(s[right])
                right++
            }
            max = Math.max(max, set.size)
        }
        return Math.max(max,set.size)
    }
}
