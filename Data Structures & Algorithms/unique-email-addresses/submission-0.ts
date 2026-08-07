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
            console.log("d",d,"e",e)
            if(e.indexOf("+")!== -1){
             
                e = e.slice(0,e.indexOf("+"))
                console.log("d",d,"e",e,"+")
            }
            console.log("d",d,"e",e)
            e = e.replaceAll(".", "")
            console.log("d",d,"e",e)
            if(map.get(d)) {
                console.log("d",d,"e",e,"hello")
                const set = map.get(d)
                set.add(e)
                console.log("set",set)
                map.set(d,set)
            } else {
            map.set(d, new Set([e]))

            }
        }
        console.log("e", map)
        for(const [key, val] of map) {
            ans+=val.size
        }
        return ans
    }
}
