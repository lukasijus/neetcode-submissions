class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails: string[]): number {
        let ans = 0
        const map = new Map() 
        for(let i = 0; i < emails.length; i++) {
            let [e,d] = emails[i].split("@")

            if(e.indexOf("+")!== -1){
             
                e = e.slice(0,e.indexOf("+"))
                console.log("d",d,"e",e,"+")
            }
 
            e = e.replaceAll(".", "")
        
            if(map.get(d)) {
       
                const set = map.get(d)
                set.add(e)
               
                map.set(d,set)
            } else {
            map.set(d, new Set([e]))

            }
        }
        for(const [key, val] of map) {
            ans+=val.size
        }
        return ans
    }
}
