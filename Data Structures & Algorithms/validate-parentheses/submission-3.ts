class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const OB1 = "("
        let ob1 = 0
        const OB2 = "{"
        let ob2 = 0
        const OB3 = "["
        let ob3 = 0
        const CB1 = ")"
        let cb1 = 0
        const CB2 = "}"
        let cb2 = 0
        const CB3 = "]"
        let cb3 = 0
        let total_opening = 0
        let total_closing = 0
        if(s[0] === CB1 || s[0] === CB2 || s[0] === CB3 || s.length < 2)  return false; 
        for(let i = 0; i < s.length; i++) {
            const OB = s[i]
            if(OB === OB1) {
                if(i !== s.length - 1) {
                     const next = s[i + 1] 
                     if(next === CB2 || next === CB3) {
                        return false 
                     }
                }
                ob1++;
                total_opening++
            }
            if(OB === OB2){
                if(i !== s.length - 1) {
                     const next = s[i + 1] 
                     if(next === CB1 || next === CB3) {
                        return false 
                     }
                } 
                ob2++;
                total_opening++
            }
            if(OB === OB3) {
                if(i !== s.length - 1) {
                     const next = s[i + 1] 
                     if(next === CB1 || next === CB2) {
                        return false 
                     }
                }
                ob3++; 
                total_opening++
            }
            if(OB === CB1) cb1++;
            if(OB === CB2) cb2++;
            if(OB === CB3) cb3++;
            if((cb1 + cb2 + cb3) > total_opening) return false; 
        }
        if(ob1 != cb1) return false;
        if(ob2 != cb2) return false; 
        if(ob3 != cb3) return false; 
        return true
      }
}
