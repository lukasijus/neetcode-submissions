class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) return false 
        const mapS = new Map<string, number>()
        const mapT = new Map<string, number>()
        for(let i = 0 ; i < s.length; i++) {
            mapS.set(s[i], mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1)

            mapT.set(t[i], mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1)
        }
        for(const [key,value] of mapS) {
            if(value != mapT.get(key)) return false 
        }
        return true
    }
}
