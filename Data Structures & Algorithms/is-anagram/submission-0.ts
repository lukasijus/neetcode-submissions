class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const ss = s.split("").map((str) => str.charCodeAt(0))
        const ts = t.split("").map((str) => str.charCodeAt(0))
        ss.sort((a,b) => a - b)
        ts.sort((a,b) => a - b)

        const sc = ss.map((num) => String.fromCharCode(num)).join("")
        const tc = ts.map((num) => String.fromCharCode(num)).join("")

        if(sc === tc) {
            return true
        }
        return false 
    }
}
