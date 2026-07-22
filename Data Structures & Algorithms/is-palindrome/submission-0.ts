class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

        isNumber(num:number): boolean {
            if(num <= 57 && num >= 48) {
                return true
            }
            return false
        }
       isAZ (num: number): boolean {
            if(num <= 90 && num >= 65 ) {
                return true
            }
            return false
        }
        
        isaz(num: number): boolean {
            if(num <= 122 && num >= 97) {
                return true
            }
            return false
        }
    isPalindrome(s: string): boolean {
        let sf = ""

        for(let i = 0; i < s.length; i++) {
            if(this.isNumber(s.charCodeAt(i)) || this.isAZ(s.charCodeAt(i)) || this.isaz(s.charCodeAt(i))) {
                sf+=s[
                    i
                ].toLowerCase()
            }
        }
        const n = sf.length % 2 === 0 ? sf.length / 2 : (sf.length - 1) / 2 

        for(let i = 0; i < n; i++){
            if(sf[i] != sf[sf.length - 1 -i]) {
                console.log(sf[i], sf[sf.length -1])
                return false
            }
        }
        return true
    }
}
