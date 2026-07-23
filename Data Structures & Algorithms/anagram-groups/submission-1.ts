class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map()
        const output = []
        strs = strs.sort()
        for(let i = 0; i < strs.length; i++) {
            //console.log("strs[i]", strs[i])
            let sum = 0
            const chars = []
            for(let j = 0; j < strs[i].length; j++) {
                sum+=strs[i].charCodeAt(j)
                chars.push(strs[i].charCodeAt(j))
            }
            chars.sort((a,b) => a - b)
            const charString = String.fromCharCode(...chars)
            //console.log(charString)
            if(map.get(charString)) {
                const out = map.get(charString)
            //    console.log(typeof(out), out)
                map.set(charString, [...out, strs[i]])
            } else {
                map.set(charString, [strs[i]])
            }
        }
        for(const [key, value] of map) {
          //  console.log("key", key, "value", value)
            output.push(value)
        }
        //console.log("map", map)
                return output
    }
}
