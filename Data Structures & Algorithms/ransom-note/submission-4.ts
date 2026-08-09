class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: any, magazine: any): boolean {
        for(let i = 0; i < ransomNote.length; i++) {
            if(magazine.search(ransomNote[i]) === -1) {
                return false 
            }
            magazine = magazine.replace(ransomNote[i],"")
        }
        return true
    }
}
